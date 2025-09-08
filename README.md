# Switch Waste Management Solutions - Professional Website

A comprehensive, professional website for Switch Waste Management Solutions, specializing in healthcare and general waste management services in Johannesburg, South Africa.

## 🚀 Features

- **Professional Design**: Modern, responsive design with professional branding
- **Multi-page Website**: Complete website with Home, Services, About, and Contact pages
- **Contact Form**: Functional contact form with email notifications
- **Database Integration**: MySQL database for storing contact inquiries
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Mobile Responsive**: Fully responsive design for all devices
- **Interactive Elements**: Mobile menu, FAQ toggles, animations
- **Security Features**: Input validation, CSRF protection, rate limiting

## 📁 Project Structure

```
switch-waste-website/
├── index.html              # Home page
├── services.html           # Services page
├── about.html              # About us page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── php/
│   ├── config.php          # Database and email configuration
│   └── contact-handler.php # Contact form processing
├── database/
│   └── schema.sql          # Database schema
├── vendor/                 # PHPMailer dependencies
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- **Web Server**: Apache/Nginx with PHP 7.4+ support
- **Database**: MySQL 5.7+ or MariaDB 10.0+
- **PHP Extensions**:
  - PDO (php-pdo)
  - MySQLi (php-mysqli)
  - mbstring (php-mbstring)
  - json (php-json)

### 1. Database Setup

1. Create a new MySQL database:
```sql
CREATE DATABASE switch_waste_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Import the database schema:
```bash
mysql -u username -p switch_waste_db < database/schema.sql
```

3. Update database credentials in `php/config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'switch_waste_db');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');
```

### 2. Email Configuration

Update email settings in `php/config.php`:

```php
// For PHPMailer (recommended)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-app-password');
define('FROM_EMAIL', 'your-email@gmail.com');
define('FROM_NAME', 'Switch Waste Solutions');
define('ADMIN_EMAIL', 'admin@switchwaste.co.za');

// For PHP mail() fallback
define('FROM_EMAIL', 'noreply@yourdomain.com');
define('FROM_NAME', 'Switch Waste Solutions');
```

### 3. File Permissions

Set proper permissions for log files and uploads:

```bash
# Create logs directory
mkdir -p logs
chmod 755 logs

# Set permissions for PHP files
chmod 644 php/*.php
chmod 644 database/*.sql
```

### 4. Web Server Configuration

#### Apache (.htaccess)

Create a `.htaccess` file in the root directory:

```apache
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .php extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.php -f
RewriteRule ^(.*)$ $1.php

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Prevent access to sensitive files
<Files "config.php">
    Order Allow,Deny
    Deny from all
</Files>

<Files "*.log">
    Order Allow,Deny
    Deny from all
</Files>
```

#### Nginx Configuration

Add to your server block:

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

location ~ \.php$ {
    include fastcgi_params;
    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
}

# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;

# Deny access to sensitive files
location ~ /(config\.php|.*\.log)$ {
    deny all;
    return 404;
}
```

## 📧 Email Setup

### Option 1: PHPMailer (Recommended)

1. Install PHPMailer via Composer:
```bash
composer require phpmailer/phpmailer
```

2. Configure SMTP settings in `php/config.php`

### Option 2: PHP Mail Function (Fallback)

The system automatically falls back to PHP's built-in `mail()` function if PHPMailer is not available.

## 🔒 Security Features

- **Input Validation**: All user inputs are sanitized and validated
- **CSRF Protection**: Cross-site request forgery protection
- **Rate Limiting**: Prevents spam and abuse
- **SQL Injection Protection**: Prepared statements and input sanitization
- **XSS Protection**: HTML escaping and content security
- **Secure Headers**: Security headers for additional protection

## 📱 Features Overview

### Frontend Features
- **Responsive Design**: Works on all devices and screen sizes
- **Interactive Elements**: Mobile menu, FAQ toggles, smooth scrolling
- **Professional UI**: Modern design with consistent branding
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Fast Loading**: Optimized CSS and JavaScript

### Backend Features
- **Contact Form Processing**: Handles form submissions and email notifications
- **Database Storage**: Stores contact inquiries in MySQL database
- **Email Notifications**: Sends confirmation emails to customers and admins
- **Error Handling**: Comprehensive error handling and logging
- **Security**: Multiple security layers and validation

## 🧪 Testing

### Manual Testing Checklist

1. **Contact Form**:
   - Submit form with valid data
   - Test validation errors
   - Check email notifications
   - Verify database storage

2. **Responsive Design**:
   - Test on mobile devices
   - Test on tablets
   - Test on desktop
   - Check navigation menu

3. **Cross-browser Testing**:
   - Chrome/Chromium
   - Firefox
   - Safari
   - Edge

### Automated Testing

Run PHP tests:
```bash
php -l php/config.php
php -l php/contact-handler.php
```

## 🚀 Deployment

### Production Deployment

1. **Environment Setup**:
   - Set up production database
   - Configure production email settings
   - Set up SSL certificate

2. **File Upload**:
   - Upload all files to web server
   - Set proper file permissions
   - Configure web server

3. **Database Migration**:
   - Import database schema
   - Update configuration files
   - Test database connection

4. **Security Checklist**:
   - Remove debug information
   - Set secure file permissions
   - Configure firewall
   - Set up monitoring

## 📊 Database Schema

The database includes the following tables:

- `contact_inquiries`: Stores contact form submissions
- `services`: Service catalog
- `quotes`: Quote requests
- `blog_posts`: Content management
- `admin_users`: Administrative users
- `analytics`: Website analytics

## 🔧 Customization

### Branding
- Update colors in `css/styles.css` (CSS custom properties)
- Replace logo and images
- Update company information in all HTML files

### Content
- Update service descriptions
- Modify contact information
- Add new pages or sections

### Functionality
- Add new form fields
- Implement additional features
- Customize email templates

## 🐛 Troubleshooting

### Common Issues

1. **Contact Form Not Working**:
   - Check PHP error logs
   - Verify database connection
   - Check email configuration
   - Ensure file permissions are correct

2. **Database Connection Failed**:
   - Verify database credentials
   - Check database server status
   - Ensure database exists
   - Check network connectivity

3. **Emails Not Sending**:
   - Check SMTP settings
   - Verify email credentials
   - Check spam folder
   - Review mail server logs

4. **404 Errors**:
   - Check `.htaccess` configuration
   - Verify file permissions
   - Ensure correct file paths

### Debug Mode

Enable debug mode by adding to `php/config.php`:

```php
define('DEBUG_MODE', true);
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## 📞 Support

For technical support or questions:
- Email: admin@switchwaste.co.za
- Phone: +27 10 006 9158
- Address: 48 16th Avenue, Edenvale, Johannesburg 1609

## 📄 License

This project is proprietary software for Switch Waste Management Solutions.

## 🔄 Version History

- **v1.0.0**: Initial release with complete website functionality
- Professional design and responsive layout
- Contact form with database integration
- Email notification system
- Security features and validation

---

**Built with ❤️ for Switch Waste Management Solutions**