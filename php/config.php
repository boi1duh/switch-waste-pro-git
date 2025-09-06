<?php
// Switch Waste Management Solutions - Database Configuration

// Prevent direct access
if (!defined('ALLOW_ACCESS')) {
    http_response_code(403);
    die('Direct access not allowed');
}

// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'switch_waste_db');
define('DB_USER', 'switch_waste_user');
define('DB_PASS', 'secure_password_here');

// Email configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'info@switchwaste.co.za');
define('SMTP_PASSWORD', 'email_password_here');
define('FROM_EMAIL', 'info@switchwaste.co.za');
define('FROM_NAME', 'Switch Waste Solutions');
define('ADMIN_EMAIL', 'admin@switchwaste.co.za');

// Site configuration
define('SITE_URL', 'https://www.switchwaste.co.za');
define('SITE_NAME', 'Switch Waste Management Solutions');

// Security
define('SECRET_KEY', 'your_secret_key_here_' . date('Y'));

// Database connection
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
} catch (PDOException $e) {
    error_log("Database connection failed: " . $e->getMessage());
    die("Database connection failed. Please try again later.");
}

// Utility functions
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Generate a secure random token using available PHP functions
 *
 * @return string 64-character hexadecimal token
 */
function generateToken() {
    // Use uniqid with more entropy and current time for randomness
    $token = hash('sha256', uniqid(microtime(true), true) . $_SERVER['REQUEST_TIME_FLOAT'] . php_uname());
    
    // Ensure we return exactly 64 characters
    return substr($token, 0, 64);
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
    // Use PHP built-in mail function
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . FROM_NAME . " <" . FROM_EMAIL . ">" . "\r\n";

    return mail($to, $subject, $message, $headers);
}

function logActivity($action, $details = '') {
    $logFile = '../logs/activity.log';
    $logDir = dirname($logFile);

    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $timestamp = date('Y-m-d H:i:s');
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

    $logEntry = "[$timestamp] [$ip] [$userAgent] $action: $details" . PHP_EOL;

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}

function getClientIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    }
}

function rateLimitCheck($identifier, $maxRequests = 5, $timeWindow = 3600) {
    $cacheFile = sys_get_temp_dir() . '/rate_limit_' . md5($identifier) . '.cache';

    $currentTime = time();
    $requests = [];

    if (file_exists($cacheFile)) {
        $requests = json_decode(file_get_contents($cacheFile), true) ?: [];
        // Filter out old requests
        $requests = array_filter($requests, function($timestamp) use ($currentTime, $timeWindow) {
            return ($currentTime - $timestamp) < $timeWindow;
        });
    }

    // Check if limit exceeded
    if (count($requests) >= $maxRequests) {
        return false;
    }

    // Add current request
    $requests[] = $currentTime;

    // Save to cache
    file_put_contents($cacheFile, json_encode($requests));

    return true;
}

// CSRF Protection
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = generateToken();
    }
    return $_SESSION['csrf_token'];
}

function validateCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Error monitoring function
function logError($message, $context = []) {
    $logFile = '../logs/errors.log';
    $logDir = dirname($logFile);

    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }

    $timestamp = date('Y-m-d H:i:s');
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

    $logEntry = sprintf(
        "[%s] [%s] [%s] ERROR: %s | Context: %s\n",
        $timestamp,
        $ip,
        $userAgent,
        $message,
        json_encode($context)
    );

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}

// Performance monitoring
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
}

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>