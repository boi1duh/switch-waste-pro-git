<?php
/**
 * Switch Waste Management Solutions - Website Validation Test
 * This script validates that all website components are working correctly
 */

// Start output buffering
ob_start();

echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Website Validation Test - Switch Waste Solutions</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #2c5530; border-bottom: 2px solid #7fb069; padding-bottom: 10px; }
        h2 { color: #4a7c59; margin-top: 30px; }
        .test-result { margin: 10px 0; padding: 10px; border-radius: 4px; }
        .success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .warning { background: #fff3cd; color: #856404; border: 1px solid #ffeaa7; }
        .error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .info { background: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb; }
        pre { background: #f8f9fa; padding: 10px; border-radius: 4px; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; margin: 10px 0; }
        th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f8f9fa; }
    </style>
</head>
<body>
    <div class='container'>
        <h1>🔍 Switch Waste Management Solutions - Website Validation Test</h1>
        <p><strong>Test Date:</strong> " . date('Y-m-d H:i:s') . "</p>
        <p><strong>Server:</strong> " . $_SERVER['SERVER_SOFTWARE'] . "</p>
        <p><strong>PHP Version:</strong> " . PHP_VERSION . "</p>";

// Test 1: File Structure
echo "<h2>📁 File Structure Test</h2>";

$requiredFiles = [
    'index.html' => 'Home page',
    'services.html' => 'Services page',
    'about.html' => 'About page',
    'contact.html' => 'Contact page',
    'css/styles.css' => 'Main stylesheet',
    'js/main.js' => 'JavaScript file',
    'php/config.php' => 'Configuration file',
    'php/contact-handler.php' => 'Contact form handler',
    'database/schema.sql' => 'Database schema',
    'README.md' => 'Documentation'
];

echo "<table>
    <tr><th>File</th><th>Status</th><th>Description</th></tr>";

foreach ($requiredFiles as $file => $description) {
    $status = file_exists($file) ? '<span class="success">✓ Found</span>' : '<span class="error">✗ Missing</span>';
    echo "<tr><td>$file</td><td>$status</td><td>$description</td></tr>";
}

echo "</table>";

// Test 2: PHP Configuration
echo "<h2>⚙️ PHP Configuration Test</h2>";

$requiredExtensions = ['pdo', 'pdo_mysql', 'mbstring', 'json'];
$phpInfo = [];

foreach ($requiredExtensions as $ext) {
    $loaded = extension_loaded($ext);
    $phpInfo[] = [
        'extension' => $ext,
        'loaded' => $loaded,
        'status' => $loaded ? '<span class="success">✓ Loaded</span>' : '<span class="warning">⚠ Not loaded</span>'
    ];
}

echo "<table>
    <tr><th>Extension</th><th>Status</th><th>Required</th></tr>";

foreach ($phpInfo as $info) {
    $required = in_array($info['extension'], $requiredExtensions) ? 'Yes' : 'No';
    echo "<tr><td>{$info['extension']}</td><td>{$info['status']}</td><td>$required</td></tr>";
}

echo "</table>";

// Test 3: Database Connection (if config exists)
echo "<h2>🗄️ Database Connection Test</h2>";

if (file_exists('php/config.php')) {
    echo "<div class='test-result info'>ℹ Attempting to test database connection...</div>";

    try {
        // Include config to test database connection
        define('ALLOW_ACCESS', true);
        require_once 'php/config.php';

        // Test database connection
        $stmt = $pdo->query("SELECT 1");
        if ($stmt) {
            echo "<div class='test-result success'>✓ Database connection successful</div>";
        }
    } catch (Exception $e) {
        echo "<div class='test-result error'>✗ Database connection failed: " . $e->getMessage() . "</div>";
        echo "<div class='test-result info'>ℹ Make sure to configure database settings in php/config.php</div>";
    }
} else {
    echo "<div class='test-result error'>✗ Configuration file not found</div>";
}

// Test 4: Email Configuration
echo "<h2>📧 Email Configuration Test</h2>";

if (defined('FROM_EMAIL') && defined('FROM_NAME')) {
    echo "<div class='test-result success'>✓ Email configuration found</div>";
    echo "<p><strong>From Email:</strong> " . FROM_EMAIL . "</p>";
    echo "<p><strong>From Name:</strong> " . FROM_NAME . "</p>";
} else {
    echo "<div class='test-result warning'>⚠ Email configuration not loaded</div>";
}

// Test 5: Contact Form Validation
echo "<h2>📝 Contact Form Test</h2>";

if (file_exists('contact.html')) {
    $contactContent = file_get_contents('contact.html');

    $formChecks = [
        'Form action' => strpos($contactContent, 'action="php/contact-handler.php"') !== false,
        'Name field' => strpos($contactContent, 'name="name"') !== false,
        'Email field' => strpos($contactContent, 'name="email"') !== false,
        'Message field' => strpos($contactContent, 'name="message"') !== false,
        'Submit button' => strpos($contactContent, 'type="submit"') !== false
    ];

    echo "<table>
        <tr><th>Component</th><th>Status</th></tr>";

    foreach ($formChecks as $component => $found) {
        $status = $found ? '<span class="success">✓ Found</span>' : '<span class="error">✗ Missing</span>';
        echo "<tr><td>$component</td><td>$status</td></tr>";
    }

    echo "</table>";
}

// Test 6: CSS and JS Loading
echo "<h2>🎨 Assets Loading Test</h2>";

$assetChecks = [
    'CSS file exists' => file_exists('css/styles.css'),
    'JavaScript file exists' => file_exists('js/main.js'),
    'Font Awesome CDN' => strpos(file_get_contents('index.html'), 'font-awesome') !== false,
    'CSS linked in HTML' => strpos(file_get_contents('index.html'), 'css/styles.css') !== false,
    'JS linked in HTML' => strpos(file_get_contents('index.html'), 'js/main.js') !== false
];

echo "<table>
    <tr><th>Asset</th><th>Status</th></tr>";

foreach ($assetChecks as $asset => $exists) {
    $status = $exists ? '<span class="success">✓ OK</span>' : '<span class="error">✗ Issue</span>';
    echo "<tr><td>$asset</td><td>$status</td></tr>";
}

echo "</table>";

// Test 7: Security Features
echo "<h2>🔒 Security Features Test</h2>";

$securityChecks = [
    'Direct access prevention' => strpos(file_get_contents('php/config.php'), 'ALLOW_ACCESS') !== false,
    'Input sanitization' => function_exists('sanitizeInput'),
    'Email validation' => function_exists('validateEmail'),
    'CSRF protection' => function_exists('generateCSRFToken')
];

echo "<table>
    <tr><th>Security Feature</th><th>Status</th></tr>";

foreach ($securityChecks as $feature => $implemented) {
    $status = $implemented ? '<span class="success">✓ Implemented</span>' : '<span class="error">✗ Missing</span>';
    echo "<tr><td>$feature</td><td>$status</td></tr>";
}

echo "</table>";

// Test 8: Performance Check
echo "<h2>⚡ Performance Test</h2>";

$startTime = microtime(true);

// Test page load time for main pages
$pages = ['index.html', 'services.html', 'about.html', 'contact.html'];
$pageSizes = [];

foreach ($pages as $page) {
    if (file_exists($page)) {
        $size = filesize($page);
        $pageSizes[$page] = number_format($size / 1024, 2) . ' KB';
    }
}

$endTime = microtime(true);
$loadTime = round(($endTime - $startTime) * 1000, 2);

echo "<div class='test-result info'>ℹ Page load test completed in {$loadTime}ms</div>";

echo "<table>
    <tr><th>Page</th><th>Size</th></tr>";

foreach ($pageSizes as $page => $size) {
    echo "<tr><td>$page</td><td>$size</td></tr>";
}

echo "</table>";

// Recommendations
echo "<h2>💡 Recommendations</h2>";

$recommendations = [];

if (!extension_loaded('pdo')) {
    $recommendations[] = "Install PDO PHP extension for database connectivity";
}

if (!extension_loaded('pdo_mysql')) {
    $recommendations[] = "Install PDO MySQL extension for database connectivity";
}

if (!file_exists('php/config.php')) {
    $recommendations[] = "Create and configure php/config.php with database and email settings";
}

if (!defined('FROM_EMAIL')) {
    $recommendations[] = "Configure email settings in php/config.php";
}

if (empty($recommendations)) {
    echo "<div class='test-result success'>✓ All basic requirements are met!</div>";
} else {
    echo "<div class='test-result warning'>⚠ Some improvements recommended:</div>";
    echo "<ul>";
    foreach ($recommendations as $rec) {
        echo "<li>$rec</li>";
    }
    echo "</ul>";
}

echo "<h2>📋 Summary</h2>";
echo "<div class='test-result info'>";
echo "ℹ This validation test checks the basic functionality of the Switch Waste Management Solutions website.<br>";
echo "ℹ For production deployment, ensure all database credentials are properly configured and test email functionality.<br>";
echo "ℹ Review the README.md file for detailed setup instructions.";
echo "</div>";

echo "<p style='margin-top: 30px; text-align: center; color: #666;'>";
echo "Test completed on " . date('l, F j, Y \a\t g:i A') . "<br>";
echo "Generated by Switch Waste Management Solutions validation script";
echo "</p>";

echo "    </div>
</body>
</html>";

// Output the complete HTML
$content = ob_get_clean();
echo $content;
?>