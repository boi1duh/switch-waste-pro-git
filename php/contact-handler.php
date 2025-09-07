<?php
// Switch Waste Management Solutions - Contact Form Handler
// Version: 1.0.0
// Security: Basic validation and sanitization

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Rate limiting (basic implementation)
session_start();
$last_submission = $_SESSION['last_contact_submission'] ?? 0;
$current_time = time();

if ($current_time - $last_submission < 60) { // 60 seconds between submissions
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Please wait before submitting another request']);
    exit;
}

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Get and sanitize form data
$name = sanitize_input($_POST['name'] ?? '');
$email = sanitize_input($_POST['email'] ?? '');
$phone = sanitize_input($_POST['phone'] ?? '');
$company = sanitize_input($_POST['company'] ?? '');
$service = sanitize_input($_POST['service'] ?? '');
$waste_volume = sanitize_input($_POST['waste_volume'] ?? '');
$collection_frequency = sanitize_input($_POST['collection_frequency'] ?? '');
$message = sanitize_input($_POST['message'] ?? '');
$consent = isset($_POST['consent']) && $_POST['consent'] === 'on';
$newsletter = isset($_POST['newsletter']) && $_POST['newsletter'] === 'on';
$timestamp = sanitize_input($_POST['timestamp'] ?? '');

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!is_valid_email($email)) {
    $errors[] = 'Please enter a valid email address';
}

if (empty($service)) {
    $errors[] = 'Please select a service';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

if (!$consent) {
    $errors[] = 'You must agree to the terms and conditions';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Email configuration
$to = 'info@switchwaste.co.za';
$subject = 'New Contact Form Submission - Switch Waste Solutions';

// Create email content
$email_content = "
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2c5530; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2c5530; }
        .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #ddd; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>📞 New Contact Form Submission</h1>
            <p>Switch Waste Management Solutions</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>{$name}</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>{$email}</div>
            </div>
            <div class='field'>
                <div class='label'>Phone:</div>
                <div class='value'>{$phone}</div>
            </div>
            <div class='field'>
                <div class='label'>Company:</div>
                <div class='value'>{$company}</div>
            </div>
            <div class='field'>
                <div class='label'>Service Required:</div>
                <div class='value'>{$service}</div>
            </div>
            <div class='field'>
                <div class='label'>Waste Volume:</div>
                <div class='value'>{$waste_volume}</div>
            </div>
            <div class='field'>
                <div class='label'>Collection Frequency:</div>
                <div class='value'>{$collection_frequency}</div>
            </div>
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='value'>{$message}</div>
            </div>
            <div class='field'>
                <div class='label'>Newsletter Subscription:</div>
                <div class='value'>" . ($newsletter ? 'Yes' : 'No') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Submitted:</div>
                <div class='value'>{$timestamp}</div>
            </div>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Switch Waste Website <noreply@switchwaste.co.za>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";

// Send email
$mail_sent = mail($to, $subject, $email_content, $headers);

if ($mail_sent) {
    // Update session for rate limiting
    $_SESSION['last_contact_submission'] = $current_time;

    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your inquiry! We have received your message and will get back to you within 24 hours.'
    ]);
} else {
    // Log error for debugging
    error_log("Failed to send contact form email to: {$to}");

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly at info@switchwaste.co.za'
    ]);
}
?>