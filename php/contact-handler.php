<?php
// Switch Waste Management Solutions - Contact Form Handler

define('ALLOW_ACCESS', true);
require_once 'config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Rate limiting check
$clientIP = getClientIP();
if (!rateLimitCheck($clientIP, 3, 3600)) { // 3 requests per hour
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again later.']);
    exit;
}

try {
    // Validate and sanitize input
    $name = sanitizeInput($_POST['name'] ?? '');
    $email = sanitizeInput($_POST['email'] ?? '');
    $phone = sanitizeInput($_POST['phone'] ?? '');
    $company = sanitizeInput($_POST['company'] ?? '');
    $service = sanitizeInput($_POST['service'] ?? '');
    $wasteVolume = sanitizeInput($_POST['waste_volume'] ?? '');
    $collectionFrequency = sanitizeInput($_POST['collection_frequency'] ?? '');
    $message = sanitizeInput($_POST['message'] ?? '');
    $consent = isset($_POST['consent']) ? true : false;
    $newsletter = isset($_POST['newsletter']) ? true : false;

    // Validation
    $errors = [];

    if (empty($name)) {
        $errors[] = 'Name is required';
    } elseif (strlen($name) < 2) {
        $errors[] = 'Name must be at least 2 characters long';
    }

    if (empty($email)) {
        $errors[] = 'Email is required';
    } elseif (!validateEmail($email)) {
        $errors[] = 'Invalid email format';
    }

    if (!empty($phone) && !validatePhoneNumber($phone)) {
        $errors[] = 'Invalid phone number format';
    }

    if (empty($message)) {
        $errors[] = 'Message is required';
    } elseif (strlen($message) < 10) {
        $errors[] = 'Message must be at least 10 characters long';
    }

    if (!$consent) {
        $errors[] = 'You must agree to the privacy policy';
    }

    if (!empty($errors)) {
        echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
        exit;
    }

    // Format phone number if provided
    if (!empty($phone)) {
        $phone = formatPhoneNumber($phone);
    }

    // Insert into database
    $stmt = $pdo->prepare("
        INSERT INTO contact_inquiries
        (name, email, phone, company, service, waste_volume, collection_frequency, message, consent, newsletter, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    ");

    $stmt->execute([
        $name,
        $email,
        $phone,
        $company,
        $service,
        $wasteVolume,
        $collectionFrequency,
        $message,
        $consent,
        $newsletter
    ]);

    $inquiryId = $pdo->lastInsertId();

    // Send email to admin
    $adminEmailSubject = "New Contact Inquiry #" . $inquiryId . " - Switch Waste Solutions";

    $adminEmailBody = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background: #2c5530; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #2c5530; }
                .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class='header'>
                <h2>New Contact Inquiry</h2>
                <p>Inquiry ID: #" . $inquiryId . "</p>
            </div>

            <div class='content'>
                <div class='field'>
                    <span class='label'>Name:</span> " . htmlspecialchars($name) . "
                </div>
                <div class='field'>
                    <span class='label'>Email:</span> " . htmlspecialchars($email) . "
                </div>
                <div class='field'>
                    <span class='label'>Phone:</span> " . htmlspecialchars($phone) . "
                </div>
                <div class='field'>
                    <span class='label'>Company:</span> " . htmlspecialchars($company) . "
                </div>
                <div class='field'>
                    <span class='label'>Service Required:</span> " . htmlspecialchars($service) . "
                </div>
                <div class='field'>
                    <span class='label'>Waste Volume:</span> " . htmlspecialchars($wasteVolume) . "
                </div>
                <div class='field'>
                    <span class='label'>Collection Frequency:</span> " . htmlspecialchars($collectionFrequency) . "
                </div>
                <div class='field'>
                    <span class='label'>Message:</span><br>
                    " . nl2br(htmlspecialchars($message)) . "
                </div>
                <div class='field'>
                    <span class='label'>Newsletter:</span> " . ($newsletter ? 'Yes' : 'No') . "
                </div>
                <div class='field'>
                    <span class='label'>Received:</span> " . date('Y-m-d H:i:s') . "
                </div>
            </div>

            <div class='footer'>
                <p>This email was sent from the Switch Waste Solutions website contact form.</p>
            </div>
        </body>
        </html>
    ";

    $adminEmailSent = sendEmail(ADMIN_EMAIL, $adminEmailSubject, $adminEmailBody);

    // Send confirmation email to customer
    $customerEmailSubject = "Thank you for contacting Switch Waste Solutions";

    $customerEmailBody = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background: #2c5530; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .contact-info { background: #f8f9fa; padding: 15px; margin: 20px 0; border-radius: 5px; }
                .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class='header'>
                <h1>Thank you for your inquiry!</h1>
            </div>

            <div class='content'>
                <p>Dear " . htmlspecialchars($name) . ",</p>

                <p>Thank you for contacting Switch Waste Management Solutions. We have received your inquiry and will respond within 24 hours.</p>

                <h3>Your inquiry details:</h3>
                <ul>
                    <li><strong>Service:</strong> " . htmlspecialchars($service) . "</li>
                    <li><strong>Inquiry ID:</strong> #" . $inquiryId . "</li>
                    <li><strong>Received:</strong> " . date('Y-m-d H:i:s') . "</li>
                </ul>

                <p><strong>Your message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>

                <div class='contact-info'>
                    <h3>Contact Information:</h3>
                    <p>
                        <strong>Phone:</strong> +27 10 006 9158<br>
                        <strong>Mobile:</strong> 061 600 4720<br>
                        <strong>Email:</strong> info@switchwaste.co.za<br>
                        <strong>Address:</strong> 48 16th Avenue, Edenvale, Johannesburg 1609<br>
                        <strong>Business Hours:</strong> Monday - Friday: 7:30 AM - 4:30 PM
                    </p>
                </div>

                <p>We appreciate your interest in our professional waste management services. Our team will review your requirements and get back to you with a customized solution.</p>

                <p>Best regards,<br>
                <strong>Switch Waste Management Solutions Team</strong></p>
            </div>

            <div class='footer'>
                <p>This is an automated response. Please do not reply to this email.</p>
            </div>
        </body>
        </html>
    ";

    $customerEmailSent = sendEmail($email, $customerEmailSubject, $customerEmailBody);

    // Log the activity
    logActivity('contact_form_submission', "Inquiry ID: $inquiryId, Name: $name, Email: $email");

    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your inquiry! We will contact you within 24 hours.',
        'inquiry_id' => $inquiryId
    ]);

} catch (PDOException $e) {
    error_log("Database error in contact handler: " . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Database error. Please try again later.']);
} catch (Exception $e) {
    error_log("General error in contact handler: " . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Server error. Please try again later.']);
}
?>