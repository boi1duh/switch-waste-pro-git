# 🚀 XAMPP Setup Instructions for Switch Waste Management Solutions

## Prerequisites
- Download and install XAMPP from: https://www.apachefriends.org/download.html
- Ensure Apache and MySQL modules are installed

## Step-by-Step Setup

### 1. Start XAMPP Control Panel
1. Open XAMPP Control Panel
2. Start **Apache** (web server)
3. Start **MySQL** (database server)

### 2. Copy Website Files
1. Locate your XAMPP installation directory (usually `C:\xampp` on Windows)
2. Navigate to `htdocs` folder: `C:\xampp\htdocs\`
3. Copy the entire `switch waste Pro` folder into `htdocs`
4. Rename the folder to `switchwaste` (optional, for cleaner URL)

### 3. Database Setup
1. Open your browser and go to: `http://localhost/phpmyadmin`
2. Click **"New"** in the left sidebar
3. Database name: `switch_waste_db`
4. Collation: `utf8mb4_unicode_ci`
5. Click **"Create"**

### 4. Import Database Schema
1. In phpMyAdmin, select `switch_waste_db` from the left sidebar
2. Click **"Import"** tab
3. Click **"Choose File"**
4. Navigate to: `switch waste Pro/database/schema.sql`
5. Click **"Go"** to import

### 5. Configure Database Connection
1. Open `switch waste Pro/php/config.php`
2. Update database credentials if needed:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'switch_waste_db');
define('DB_USER', 'root');  // Default XAMPP user
define('DB_PASS', '');       // Default XAMPP password (empty)
```

### 6. Configure Email Settings (Optional)
1. Open `switch waste Pro/php/config.php`
2. Update email settings:
```php
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-app-password');
```

### 7. View the Website
1. Open your browser
2. Navigate to: `http://localhost/switch waste Pro/`
3. Or if renamed: `http://localhost/switchwaste/`

## Troubleshooting

### Apache Won't Start
- Check if port 80 is available
- Close Skype/other applications using port 80
- Run XAMPP as Administrator

### Database Connection Error
- Ensure MySQL is running in XAMPP
- Check database credentials in `config.php`
- Verify database name matches exactly

### PHP Errors
- Check PHP error logs: `C:\xampp\apache\logs\error.log`
- Ensure all PHP extensions are enabled
- Check file permissions

### Contact Form Not Working
- Verify email settings in `config.php`
- Check PHP mail function is enabled
- Ensure `vendor` folder is properly copied

## File Structure After Setup
```
C:\xampp\htdocs\switch waste Pro\
├── index.html
├── services.html
├── about.html
├── contact.html
├── css\
│   └── styles.css
├── js\
│   └── main.js
├── php\
│   ├── config.php
│   └── contact-handler.php
├── database\
│   └── schema.sql
├── images\
│   └── (all image files)
└── vendor\
    └── phpmailer\
```

## Testing the Website
1. **Home Page**: `http://localhost/switch waste Pro/`
2. **Services Page**: `http://localhost/switch waste Pro/services.html`
3. **About Page**: `http://localhost/switch waste Pro/about.html`
4. **Contact Page**: `http://localhost/switch waste Pro/contact.html`
5. **Contact Form**: Test form submission (requires email configuration)

## Security Notes
- Change default database password in production
- Update admin credentials in database
- Configure proper file permissions
- Enable SSL/HTTPS for production

---
**Need help?** Check the README.md file for additional setup instructions.