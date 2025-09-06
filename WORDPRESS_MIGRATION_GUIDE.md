 n a# 🔄 **WORDPRESS MIGRATION GUIDE - Switch Waste Management Solutions**

## 📋 **OVERVIEW**
This guide provides step-by-step instructions for migrating your static Switch Waste website to WordPress CMS for easier content management.

---

## 🎯 **WHY MIGRATE TO WORDPRESS?**

### **Advantages**
- ✅ **Easy Content Updates** - No coding knowledge required
- ✅ **User Management** - Multiple admin users
- ✅ **SEO Plugins** - Advanced SEO optimization
- ✅ **Contact Forms** - Drag-and-drop form builders
- ✅ **Analytics Integration** - Built-in Google Analytics
- ✅ **Plugin Ecosystem** - 50,000+ plugins available
- ✅ **Themes & Customization** - Visual customization
- ✅ **Mobile Responsiveness** - Automatic optimization

### **Considerations**
- ⚠️ **Learning Curve** - Initial setup required
- ⚠️ **Maintenance** - Regular updates needed
- ⚠️ **Hosting Costs** - May be higher than static hosting
- ⚠️ **Plugin Conflicts** - Potential compatibility issues

---

## 🛠️ **METHOD 1: FRESH WORDPRESS INSTALLATION**

### **Step 1: Choose Hosting**
**Recommended WordPress Hosts:**
- **Afrihost** (South African) - R99/month
- **Hostinger** - R89/month
- **Bluehost** - R149/month
- **SiteGround** - R199/month

### **Step 2: Install WordPress**
1. **Login to cPanel**
2. **Click "WordPress"** in Softaculous
3. **Fill installation details:**
   - Domain: `switchwaste.co.za`
   - Directory: Leave blank (root install)
   - Admin username: `admin_switch`
   - Admin password: Generate strong password
   - Admin email: `admin@switchwaste.co.za`

### **Step 3: Initial WordPress Setup**
1. **Login to WordPress:** `yourdomain.com/wp-admin`
2. **Complete setup wizard**
3. **Install essential plugins:**
   - **Elementor** (Page Builder)
   - **Yoast SEO** (SEO Optimization)
   - **Contact Form 7** (Contact Forms)
   - **WP Rocket** (Performance)
   - **Wordfence** (Security)

---

## 🎨 **METHOD 2: RECREATE DESIGN IN WORDPRESS**

### **Step 1: Choose Theme**
**Recommended Themes:**
- **Astra** (Free) - Lightweight, customizable
- **OceanWP** (Free) - Business-focused
- **GeneratePress** (Premium) - R499 one-time
- **Divi** (Premium) - R699/year

### **Step 2: Install Elementor**
1. **Go to Plugins** → **Add New**
2. **Search "Elementor"**
3. **Install and Activate**
4. **Go to Pages** → **Add New**
5. **Click "Edit with Elementor"**

### **Step 3: Recreate Pages**

#### **Home Page Structure**
```
┌─────────────────────────────────────┐
│           Header (Sticky)           │
├─────────────────────────────────────┤
│         Hero Section                │
│  - Background Image                 │
│  - Main Heading                     │
│  - Subheading                       │
│  - CTA Buttons                      │
├─────────────────────────────────────┤
│        Features Section             │
│  - 3 Feature Cards                  │
├─────────────────────────────────────┤
│      Services Preview               │
│  - 3 Service Cards                  │
├─────────────────────────────────────┤
│      Statistics Section             │
│  - 4 Animated Counters              │
├─────────────────────────────────────┤
│        Partners Section             │
│  - Partner Logos                    │
├─────────────────────────────────────┤
│       Trust Badges                  │
│  - Certification Images             │
├─────────────────────────────────────┤
│       CTA Section                   │
├─────────────────────────────────────┤
│           Footer                    │
└─────────────────────────────────────┘
```

#### **Elementor Sections to Create**
1. **Hero Section**
   - Background image widget
   - Heading widget
   - Text editor widget
   - Button widget

2. **Features Section**
   - Inner section with 3 columns
   - Icon box widgets
   - Custom styling

3. **Services Section**
   - Posts widget (custom query)
   - Custom post type for services

### **Step 4: Custom Post Types**
```php
// Add to functions.php or custom plugin
function create_service_post_type() {
    register_post_type('service',
        array(
            'labels' => array(
                'name' => 'Services',
                'singular_name' => 'Service'
            ),
            'public' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-hammer'
        )
    );
}
add_action('init', 'create_service_post_type');
```

---

## 📝 **METHOD 3: CONTENT MIGRATION**

### **Step 1: Export Content**
1. **Create content inventory:**
   - Page titles and URLs
   - Content sections
   - Images and media
   - Contact information

### **Step 2: Create WordPress Pages**
1. **Pages** → **Add New**
2. **Copy content** from static site
3. **Use Elementor** for layout
4. **Add images** from media library

### **Step 3: Migrate Images**
1. **Upload to WordPress Media Library**
2. **Optimize images** (use Smush plugin)
3. **Update image alt text** for SEO

### **Step 4: Set Up Menus**
1. **Appearance** → **Menus**
2. **Create main navigation**
3. **Add pages to menu**
4. **Set menu locations**

---

## 🔧 **ESSENTIAL WORDPRESS PLUGINS**

### **Must-Have Plugins**
```
✅ Elementor (Free) - Page Builder
✅ Yoast SEO (Free) - SEO Optimization
✅ Contact Form 7 (Free) - Contact Forms
✅ WP Rocket (Premium) - Performance
✅ Wordfence (Free) - Security
✅ UpdraftPlus (Free) - Backups
✅ Smush (Free) - Image Optimization
✅ WP Super Cache (Free) - Caching
```

### **Business-Specific Plugins**
```
✅ WooCommerce (Free) - E-commerce
✅ Bookly (Premium) - Appointment Booking
✅ Newsletter (Free) - Email Marketing
✅ Google Analytics (Free) - Analytics
✅ Schema Pro (Premium) - Rich Snippets
```

---

## 🎨 **CUSTOMIZATION GUIDE**

### **Step 1: Theme Customization**
1. **Appearance** → **Customize**
2. **Set colors** to match brand
3. **Upload logo**
4. **Set typography**
5. **Configure header/footer**

### **Step 2: Elementor Global Settings**
1. **Elementor** → **Settings**
2. **Set global colors**
3. **Configure default fonts**
4. **Set container width**
5. **Enable/disable features**

### **Step 3: Custom CSS**
```css
/* Add to Appearance → Customize → Additional CSS */
.site-header {
    position: fixed;
    width: 100%;
    z-index: 1000;
}

.hero-section {
    padding: 150px 0 100px;
    background-size: cover;
}
```

---

## 📊 **DATABASE MIGRATION**

### **Step 1: Export MySQL Data**
```sql
-- Export from phpMyAdmin
mysqldump -u username -p switch_waste_db > switch_waste_backup.sql
```

### **Step 2: Create WordPress Database Tables**
```sql
-- WordPress will create its own tables
-- Import contact data into custom tables
```

### **Step 3: Custom Database Tables**
```php
// Create custom tables for contact inquiries
function create_custom_tables() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'contact_inquiries';

    $sql = "CREATE TABLE $table_name (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
register_activation_hook(__FILE__, 'create_custom_tables');
```

---

## 📧 **CONTACT FORM INTEGRATION**

### **Step 1: Install Contact Form 7**
1. **Plugins** → **Add New** → Search "Contact Form 7"
2. **Install and Activate**

### **Step 2: Create Contact Form**
```
<label> Full Name *
    [text* your-name] </label>

<label> Email Address *
    [email* your-email] </label>

<label> Phone Number
    [tel your-phone] </label>

<label> Company
    [text your-company] </label>

<label> Service Required *
    [select* your-service "Healthcare Waste" "Pharmaceutical" "General Waste" "Consultation"] </label>

<label> Message *
    [textarea* your-message] </label>

[submit "Send Message"]
```

### **Step 3: Configure Email Settings**
1. **Contact** → **Contact Forms**
2. **Edit form** → **Mail** tab
3. **Configure recipients and message format**

---

## 🔍 **SEO OPTIMIZATION**

### **Step 1: Install Yoast SEO**
1. **Plugins** → **Add New** → Search "Yoast SEO"
2. **Install and Activate**

### **Step 2: Configure SEO Settings**
1. **SEO** → **General**
2. **Set company info**
3. **Configure social media**
4. **Set XML sitemaps**

### **Step 3: Page SEO Optimization**
1. **Edit page** → **Yoast SEO** section
2. **Set focus keyword**
3. **Write meta description**
4. **Add internal links**

---

## 📈 **PERFORMANCE OPTIMIZATION**

### **Step 1: Install WP Rocket**
1. **Plugins** → **Add New** → Search "WP Rocket"
2. **Purchase and install**

### **Step 2: Configure Caching**
1. **Settings** → **WP Rocket**
2. **Enable page caching**
3. **Set up browser caching**
4. **Configure minification**

### **Step 3: Image Optimization**
1. **Install Smush plugin**
2. **Bulk optimize images**
3. **Enable lazy loading**

---

## 🔒 **SECURITY SETUP**

### **Step 1: Install Wordfence**
1. **Plugins** → **Add New** → Search "Wordfence"
2. **Install and Activate**

### **Step 2: Security Configuration**
1. **Wordfence** → **Dashboard**
2. **Run security scan**
3. **Configure firewall**
4. **Set up login security**

### **Step 3: Backup Setup**
1. **Install UpdraftPlus**
2. **Configure automatic backups**
3. **Set backup schedule**
4. **Test backup restoration**

---

## 📱 **MOBILE OPTIMIZATION**

### **Step 1: Responsive Design**
1. **Elementor** → **Responsive Mode**
2. **Test on different screen sizes**
3. **Adjust layouts for mobile**

### **Step 2: Mobile Menu**
1. **Appearance** → **Customize**
2. **Configure mobile menu**
3. **Test navigation on mobile**

### **Step 3: Performance**
1. **Enable AMP** (Accelerated Mobile Pages)
2. **Optimize images for mobile**
3. **Test loading speed on mobile**

---

## 🔄 **MAINTENANCE & UPDATES**

### **Regular Tasks**
- [ ] Update WordPress core weekly
- [ ] Update plugins regularly
- [ ] Update theme when available
- [ ] Monitor security scans
- [ ] Check backup integrity
- [ ] Review performance metrics

### **Monthly Maintenance**
- [ ] Clean up spam comments
- [ ] Optimize database
- [ ] Review user accounts
- [ ] Update content as needed
- [ ] Check form submissions

### **Quarterly Reviews**
- [ ] Audit plugins (remove unused)
- [ ] Review security settings
- [ ] Update backup strategy
- [ ] Performance optimization
- [ ] SEO performance review

---

## 🆘 **TROUBLESHOOTING**

### **Common Issues**
1. **White Screen of Death**
   - Increase PHP memory limit
   - Deactivate problematic plugins
   - Switch to default theme

2. **Slow Loading**
   - Enable caching
   - Optimize images
   - Use CDN
   - Minify CSS/JS

3. **Plugin Conflicts**
   - Deactivate all plugins
   - Reactivate one by one
   - Check for updates

4. **Database Errors**
   - Repair database tables
   - Check file permissions
   - Verify database credentials

---

## 💰 **COST BREAKDOWN**

### **One-Time Costs**
- Domain: R150-R300/year
- Hosting: R99-R199/month
- Premium Theme: R499-R999
- Premium Plugins: R500-R2,000
- SSL Certificate: R500-R1,500/year

### **Monthly Costs**
- Hosting: R99-R199
- Premium Plugins: R50-R200
- Backup Service: R50-R100
- Security Monitoring: R30-R100

### **Annual Costs**
- Domain Renewal: R150-R300
- SSL Renewal: R500-R1,500
- Premium Support: R500-R2,000

---

## ✅ **MIGRATION CHECKLIST**

### **Pre-Migration**
- [ ] Backup existing static site
- [ ] Export database data
- [ ] Document all content and functionality
- [ ] Choose WordPress hosting
- [ ] Register domain (if needed)

### **Migration Process**
- [ ] Install WordPress
- [ ] Set up theme and plugins
- [ ] Recreate page layouts
- [ ] Migrate content
- [ ] Set up contact forms
- [ ] Configure SEO settings

### **Post-Migration**
- [ ] Test all functionality
- [ ] Verify mobile responsiveness
- [ ] Check SEO settings
- [ ] Set up backups
- [ ] Configure security
- [ ] Test contact forms

### **Go-Live Checklist**
- [ ] DNS propagation complete
- [ ] SSL certificate active
- [ ] All pages loading
