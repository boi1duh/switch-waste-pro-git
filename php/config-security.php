<?php
// Switch Waste Management Solutions - Enhanced Security Configuration
// Version: 2.0.0 - Advanced Security Implementation

// Prevent direct access
if (!defined('ALLOW_ACCESS')) {
    http_response_code(403);
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    die('Direct access not allowed');
}

// Security: Start output buffering and session security
if (!headers_sent()) {
    // Security headers
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');
    header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
    
    // Start secure session
    if (session_status() === PHP_SESSION_NONE) {
        // Enhanced session security
        ini_set('session.cookie_httponly', 1);
        ini_set('session.cookie_secure', 1); // Enable when HTTPS is available
        ini_set('session.cookie_samesite', 'Strict');
        ini_set('session.use_strict_mode', 1);
        ini_set('session.gc_maxlifetime', 3600); // 1 hour
        
        session_start();
    }
}

// Environment-based configuration
$isProduction = ($_SERVER['HTTP_HOST'] ?? '') === 'www.switchwaste.co.za';
$isSecure = ($_SERVER['HTTPS'] ?? '') === 'on';

// Database configuration with environment detection
if ($isProduction) {
    define('DB_HOST', $_ENV['DB_HOST'] ?? 'localhost');
    define('DB_NAME', $_ENV['DB_NAME'] ?? 'switch_waste_db');
    define('DB_USER', $_ENV['DB_USER'] ?? 'switch_waste_user');
    define('DB_PASS', $_ENV['DB_PASS'] ?? 'secure_password_here');
} else {
    // Development configuration
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'switch_waste_dev');
    define('DB_USER', 'dev_user');
    define('DB_PASS', 'dev_password');
}

// Email configuration with environment support
define('SMTP_HOST', $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com');
define('SMTP_PORT', $_ENV['SMTP_PORT'] ?? 587);
define('SMTP_USERNAME', $_ENV['SMTP_USERNAME'] ?? 'info@switchwaste.co.za');
define('SMTP_PASSWORD', $_ENV['SMTP_PASSWORD'] ?? 'email_password_here');
define('FROM_EMAIL', 'info@switchwaste.co.za');
define('FROM_NAME', 'Switch Waste Solutions');
define('ADMIN_EMAIL', $_ENV['ADMIN_EMAIL'] ?? 'admin@switchwaste.co.za');

// Site configuration
define('SITE_URL', $isSecure ? 'https://www.switchwaste.co.za' : 'http://localhost');
define('SITE_NAME', 'Switch Waste Management Solutions');

// Enhanced security configuration
define('SECRET_KEY', $_ENV['SECRET_KEY'] ?? hash('sha256', 'switch_waste_' . ($_SERVER['SERVER_NAME'] ?? 'localhost') . '_' . date('Y-m')));
define('ENCRYPTION_KEY', $_ENV['ENCRYPTION_KEY'] ?? hash('sha256', 'enc_' . SECRET_KEY));
define('MAX_LOGIN_ATTEMPTS', 5);
define('LOGIN_LOCKOUT_TIME', 3600); // 1 hour
define('SESSION_TIMEOUT', 3600); // 1 hour
define('CSRF_TOKEN_LIFETIME', 1800); // 30 minutes

// Rate limiting configuration
define('RATE_LIMIT_REQUESTS', $isProduction ? 3 : 10);
define('RATE_LIMIT_WINDOW', 3600); // 1 hour

// File upload security
define('MAX_UPLOAD_SIZE', 10 * 1024 * 1024); // 10MB
define('ALLOWED_FILE_TYPES', ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx']);

// Enhanced database connection with security features
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::ATTR_STRINGIFY_FETCHES => false,
            PDO::ATTR_TIMEOUT => 30,
            PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => true,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET sql_mode='STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO'"
        ]
    );
    
    // Set session variables for connection tracking
    $_SESSION['db_connected'] = true;
    $_SESSION['db_connect_time'] = time();
    
} catch (PDOException $e) {
    // Log security-relevant connection attempts
    $clientIP = getClientIP();
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    error_log("Database connection failed from IP: $clientIP, User-Agent: $userAgent - " . $e->getMessage());
    
    // Don't reveal database details in production
    if ($isProduction) {
        die("Service temporarily unavailable. Please try again later.");
    } else {
        die("Database connection failed. Check configuration.");
    }
}

// =====================================================
// ENHANCED SECURITY UTILITY FUNCTIONS
// =====================================================

function sanitizeInput($data) {
    if (!is_string($data)) {
        return '';
    }
    
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES | ENT_SUBSTITUTE | ENT_DISALLOWED, 'UTF-8');
    
    // Remove null bytes and control characters
    $data = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', $data);
    
    // Additional security filters
    $data = preg_replace('/[<>"\']/', '', $data);
    
    return $data;
}

function validateEmail($email) {
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if (!$email) return false;
    
    // Additional email security checks
    $domain = substr(strrchr($email, "@"), 1);
    
    // Block temporary email providers
    $blockedDomains = ['10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'temp-mail.org'];
    if (in_array(strtolower($domain), $blockedDomains)) {
        return false;
    }
    
    // Check for valid MX record
    return checkdnsrr($domain, 'MX');
}

function validateInput($data, $type, $maxLength = 255) {
    if (strlen($data) > $maxLength) {
        return false;
    }
    
    switch ($type) {
        case 'name':
            return preg_match('/^[a-zA-Z\s\-\'\.]{2,}$/u', $data);
            
        case 'phone':
            return preg_match('/^[\+]?[\d\s\-\(\)]{10,15}$/', preg_replace('/\D/', '', $data));
            
        case 'company':
            return preg_match('/^[a-zA-Z0-9\s\-\&\.\,\(\)]{2,}$/u', $data);
            
        case 'message':
            return strlen(trim($data)) >= 10 && strlen(trim($data)) <= 2000;
            
        default:
            return true;
    }
}

function encryptData($data, $key = null) {
    $key = $key ?: ENCRYPTION_KEY;
    $method = 'AES-256-GCM';
    $iv = random_bytes(12); // GCM mode uses 12-byte IV
    
    $encrypted = openssl_encrypt($data, $method, $key, OPENSSL_RAW_DATA, $iv, $tag);
    
    return base64_encode($iv . $tag . $encrypted);
}

function decryptData($encryptedData, $key = null) {
    $key = $key ?: ENCRYPTION_KEY;
    $method = 'AES-256-GCM';
    
    $data = base64_decode($encryptedData);
    $iv = substr($data, 0, 12);
    $tag = substr($data, 12, 16);
    $encrypted = substr($data, 28);
    
    return openssl_decrypt($encrypted, $method, $key, OPENSSL_RAW_DATA, $iv, $tag);
}

function generateSecureToken($length = 32) {
    if (function_exists('random_bytes')) {
        return bin2hex(random_bytes($length));
    } elseif (function_exists('openssl_random_pseudo_bytes')) {
        return bin2hex(openssl_random_pseudo_bytes($length));
    } else {
        // Fallback (less secure)
        return hash('sha256', uniqid(mt_rand(), true));
    }
}

function validateCSRFToken($token) {
    if (!isset($_SESSION['csrf_token']) || !isset($_SESSION['csrf_token_time'])) {
        return false;
    }
    
    // Check token expiry
    if ((time() - $_SESSION['csrf_token_time']) > CSRF_TOKEN_LIFETIME) {
        unset($_SESSION['csrf_token'], $_SESSION['csrf_token_time']);
        return false;
    }
    
    return hash_equals($_SESSION['csrf_token'], $token);
}

function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token']) || 
        !isset($_SESSION['csrf_token_time']) ||
        (time() - $_SESSION['csrf_token_time']) > CSRF_TOKEN_LIFETIME) {
        
        $_SESSION['csrf_token'] = generateSecureToken();
        $_SESSION['csrf_token_time'] = time();
    }
    
    return $_SESSION['csrf_token'];
}

function detectSuspiciousActivity($data) {
    $suspiciousPatterns = [
        '/script\s*:/i',
        '/javascript\s*:/i',
        '/vbscript\s*:/i',
        '/on\w+\s*=/i',
        '/<\s*iframe/i',
        '/<\s*object/i',
        '/<\s*embed/i',
        '/<\s*applet/i',
        '/union\s+select/i',
        '/insert\s+into/i',
        '/delete\s+from/i',
        '/drop\s+table/i',
        '/%27|%22|%3C|%3E|%5C/i', // Encoded quotes and brackets
        '/\.\./i' // Directory traversal
    ];
    
    $dataString = is_array($data) ? json_encode($data) : (string)$data;
    
    foreach ($suspiciousPatterns as $pattern) {
        if (preg_match($pattern, $dataString)) {
            return true;
        }
    }
    
    return false;
}

function logSecurityEvent($event, $details = '', $severity = 'INFO') {
    $logFile = '../logs/security.log';
    $logDir = dirname($logFile);

    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $timestamp = date('Y-m-d H:i:s');
    $ip = getClientIP();
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    $requestUri = $_SERVER['REQUEST_URI'] ?? 'unknown';
    
    $logEntry = sprintf(
        "[%s] [%s] [%s] %s: %s | IP: %s | UA: %s | URI: %s\n",
        $timestamp,
        $severity,
        session_id(),
        $event,
        $details,
        $ip,
        substr($userAgent, 0, 200),
        $requestUri
    );

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    
    // Alert for critical security events
    if (in_array($severity, ['CRITICAL', 'HIGH'])) {
        error_log("SECURITY ALERT: $event - $details");
    }
}

function getClientIP() {
    $ipKeys = ['HTTP_CF_CONNECTING_IP', 'HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR'];
    
    foreach ($ipKeys as $key) {
        if (!empty($_SERVER[$key])) {
            $ips = explode(',', $_SERVER[$key]);
            $ip = trim($ips[0]);
            
            // Validate IP
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function generateToken() {
    if (function_exists('random_bytes')) {
        return bin2hex(random_bytes(32));
    } elseif (function_exists('openssl_random_pseudo_bytes')) {
        return bin2hex(openssl_random_pseudo_bytes(32));
    } else {
        // Fallback: use mt_rand (less secure)
        $token = '';
        for ($i = 0; $i < 32; $i++) {
            $token .= dechex(mt_rand(0, 15));
        }
        return $token;
    }
}

// Session management with security
function isSessionValid() {
    if (!isset($_SESSION['db_connected']) || !isset($_SESSION['db_connect_time'])) {
        return false;
    }
    
    // Check session timeout
    if ((time() - $_SESSION['db_connect_time']) > SESSION_TIMEOUT) {
        session_destroy();
        return false;
    }
    
    return true;
}

function refreshSession() {
    if (isSessionValid()) {
        $_SESSION['db_connect_time'] = time();
        return true;
    }
    return false;
}

// Initialize security monitoring
if (!isset($_SESSION['security_init'])) {
    logSecurityEvent('SESSION_STARTED', 'New session initialized', 'INFO');
    $_SESSION['security_init'] = true;
    $_SESSION['session_start_time'] = time();
}

// Check for suspicious activity in current request
$requestData = array_merge($_GET, $_POST);
if (!empty($requestData) && detectSuspiciousActivity($requestData)) {
    logSecurityEvent('SUSPICIOUS_ACTIVITY_DETECTED', 'Malicious patterns in request data', 'HIGH');
    http_response_code(400);
    die('Bad Request');
}

?>
    foreach ($ipKeys as $key) {
        if (!empty($_SERVER[$key])) {
            $ips = explode(',', $_SERVER[$key]);
            $ip = trim($ips[0]);
            
            // Validate IP
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function rateLimitCheck($identifier, $maxRequests = null, $timeWindow = null) {
    $maxRequests = $maxRequests ?: RATE_LIMIT_REQUESTS;
    $timeWindow = $timeWindow ?: RATE_LIMIT_WINDOW;
    
    // Use secure cache file with proper permissions
    $cacheFile = sys_get_temp_dir() . '/switch_waste_rl_' . hash('sha256', $identifier . SECRET_KEY) . '.cache';

    $currentTime = time();
    $requests = [];

    if (file_exists($cacheFile)) {
        $content = file_get_contents($cacheFile);
        $requests = json_decode($content, true) ?: [];
        
        // Filter out old requests
        $requests = array_filter($requests, function($requestData) use ($currentTime, $timeWindow) {
            return ($currentTime - $requestData['timestamp']) < $timeWindow;
        });
    }

    // Check if limit exceeded
    if (count($requests) >= $maxRequests) {
        // Log rate limit exceeded
        logSecurityEvent('RATE_LIMIT_EXCEEDED', "Identifier: $identifier, Count: " . count($requests), 'WARNING');
        return false;
    }

    // Add current request with additional metadata
    $requests[] = [
        'timestamp' => $currentTime,
        'ip' => getClientIP(),
        'user_agent' => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 100)
    ];

    // Save to cache with proper permissions
    file_put_contents($cacheFile, json_encode($requests), LOCK_EX);
    chmod($cacheFile, 0600); // Owner read/write only

    return true;
}

function validatePhoneNumber($phone) {
    // Remove all non-digit characters
    $phone = preg_replace('/\D/', '', $phone);

    // Check if it's a valid South African number with country code (27 + 9 digits = 11 digits)
    if (preg_match('/^27\d{9}$/', $phone) && strlen($phone) === 11) {
        return true;
    }

    // Check if it's a local number (10 digits)
    if (preg_match('/^\d{10}$/', $phone)) {
        return true;
    }

    return false;
}

function formatPhoneNumber($phone) {
    $phone = preg_replace('/\D/', '', $phone);

    if (strlen($phone) === 10) {
        return substr($phone, 0, 3) . ' ' . substr($phone, 3, 3) . ' ' . substr($phone, 6);
    } elseif (strlen($phone) === 10 && $phone[0] === '0') {
        return substr($phone, 0, 3) . ' ' . substr($phone, 3, 3) . ' ' . substr($phone, 6);
    } elseif (strlen($phone) === 11 && substr($phone, 0, 2) === '27') {
        return '+27 ' . substr($phone, 2, 3) . ' ' . substr($phone, 5, 3) . ' ' . substr($phone, 8);
    }

    return $phone;
}

function sendEmail($to, $subject, $message, $isHTML = true) {
    // Input validation and sanitization
    if (!validateEmail($to)) {
        logSecurityEvent('EMAIL_VALIDATION_FAILED', "Invalid email: $to", 'WARNING');
        return false;
    }
    
    // Check if PHPMailer is available
    if (file_exists('../vendor/autoload.php')) {
        require_once '../vendor/autoload.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer(true);

        try {
            // Enhanced server settings with security
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = SMTP_PORT;
            $mail->SMTPOptions = [
                'ssl' => [
                    'verify_peer' => true,
                    'verify_peer_name' => true,
                    'allow_self_signed' => false
                ]
            ];

            // Recipients with validation
            $mail->setFrom(FROM_EMAIL, FROM_NAME);
            $mail->addAddress($to);
            
            // Security: Add reply-to to prevent spoofing
            $mail->addReplyTo(FROM_EMAIL, FROM_NAME);

            // Content with security headers
            $mail->isHTML($isHTML);
            $mail->Subject = $subject;
            $mail->Body = $message;
            $mail->CharSet = 'UTF-8';
            
            // Add security headers to email
            $mail->addCustomHeader('X-Mailer', 'Switch Waste Solutions v2.0');
            $mail->addCustomHeader('X-Priority', '3');

            $result = $mail->send();
            
            if ($result) {
                logSecurityEvent('EMAIL_SENT', "To: $to, Subject: " . substr($subject, 0, 50), 'INFO');
            }
            
            return $result;
            
        } catch (Exception $e) {
            logSecurityEvent('EMAIL_FAILED', "To: $to, Error: " . $e->getMessage(), 'ERROR');
            error_log("Email sending failed: " . $mail->ErrorInfo);
            return false;
        }
    } else {
        // Enhanced fallback to PHP mail function
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: " . FROM_NAME . " <" . FROM_EMAIL . ">" . "\r\n";
        $headers .= "Reply-To: " . FROM_EMAIL . "\r\n";
        $headers .= "X-Mailer: Switch Waste Solutions v2.0" . "\r\n";
        $headers .= "X-Priority: 3" . "\r\n";

        $result = mail($to, $subject, $message, $headers);
        
        if ($result) {
            logSecurityEvent('EMAIL_SENT_FALLBACK', "To: $to", 'INFO');
        } else {
            logSecurityEvent('EMAIL_FAILED_FALLBACK', "To: $to", 'ERROR');
        }
        
        return $result;
    }
}

function logActivity($action, $details = '') {
    $logFile = '../logs/activity.log';
    $logDir = dirname($logFile);

    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $timestamp = date('Y-m-d H:i:s');
    $ip = getClientIP();
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

    $logEntry = "[$timestamp] [$ip] [" . substr($userAgent, 0, 100) . "] $action: $details" . PHP_EOL;

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    chmod($logFile, 0600); // Secure log files
}

function logError($message, $context = []) {
    $logFile = '../logs/errors.log';
    $logDir = dirname($logFile);

    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $timestamp = date('Y-m-d H:i:s');
    $ip = getClientIP();
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

    $logEntry = sprintf(
        "[%s] [%s] [%s] ERROR: %s | Context: %s\n",
        $timestamp,
        $ip,
        substr($userAgent, 0, 100),
        $message,
        json_encode($context)
    );

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    chmod($logFile, 0600); // Secure log files
}

function logPerformance($action, $startTime, $endTime) {
    $duration = ($endTime - $startTime) * 1000; // Convert to milliseconds
    $logFile = '../logs/performance.log';
    $logDir = dirname($logFile);

    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $timestamp = date('Y-m-d H:i:s');
    $logEntry = sprintf("[%s] %s: %.2fms\n", $timestamp, $action, $duration);

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    chmod($logFile, 0600); // Secure log files
}

// Session management with security
function isSessionValid() {
    if (!isset($_SESSION['db_connected']) || !isset($_SESSION['db_connect_time'])) {
        return false;
    }
    
    // Check session timeout
    if ((time() - $_SESSION['db_connect_time']) > SESSION_TIMEOUT) {
        session_destroy();
        return false;
    }
    
    return true;
}

function refreshSession() {
    if (isSessionValid()) {
        $_SESSION['db_connect_time'] = time();
        return true;
    }
    return false;
}

// Initialize security monitoring
if (!isset($_SESSION['security_init'])) {
    logSecurityEvent('SESSION_STARTED', 'New session initialized', 'INFO');
    $_SESSION['security_init'] = true;
    $_SESSION['session_start_time'] = time();
}

// Check for suspicious activity in current request
$requestData = array_merge($_GET, $_POST);
if (!empty($requestData) && detectSuspiciousActivity($requestData)) {
    logSecurityEvent('SUSPICIOUS_ACTIVITY_DETECTED', 'Malicious patterns in request data', 'HIGH');
    http_response_code(400);
    die('Bad Request');
}

?>