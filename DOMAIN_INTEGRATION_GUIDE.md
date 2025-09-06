# 🌐 **DOMAIN INTEGRATION GUIDE - Switch Waste Management Solutions**

## 📋 **OVERVIEW**
This guide provides step-by-step instructions for integrating your Switch Waste website with a custom domain name.

---

## 🔧 **METHOD 1: NETLIFY DEPLOYMENT (RECOMMENDED)**

### **Step 1: Netlify Account Setup**
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Deploy Your Site**
1. Click **"Add new site"** → **"Deploy manually"**
2. Upload the `switch-waste-netlify-deployment.zip` file
3. Wait for deployment to complete (usually 1-2 minutes)
4. Your site will be available at: `https://random-name.netlify.app`

### **Step 3: Custom Domain Setup**
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `www.switchwaste.co.za`
4. Click **"Verify"**

### **Step 4: DNS Configuration**
1. **Login to your domain registrar** (e.g., Domains.co.za, Afrihost)
2. **Go to DNS settings** for `switchwaste.co.za`
3. **Add these DNS records:**

```
Type: CNAME
Name: www
Value: random-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

4. **Save changes** (DNS propagation takes 24-48 hours)

### **Step 5: SSL Certificate**
- Netlify provides **free SSL certificates**
- HTTPS will be automatically enabled
- No additional configuration needed

---

## 🔧 **METHOD 2: TRADITIONAL HOSTING (cPanel/Plesk)**

### **Prerequisites**
- Web hosting account with PHP 7.4+ and MySQL 5.7+
- FTP access or file manager
- Domain name registered

### **Step 1: Upload Files**
1. **Connect via FTP:**
   ```
   Host: your-hosting-server.com
   Username: your-ftp-username
   Password: your-ftp-password
   Port: 21
   ```

2. **Upload all files** from `switch waste Pro` folder to `public_html`

### **Step 2: Database Setup**
1. **Login to cPanel** → **phpMyAdmin**
2. **Create new database:**
   - Database name: `switch_waste_db`
   - Username: `switchwaste_user`
   - Password: Generate strong password

3. **Import schema:**
   - Select `switch_waste_db`
   - Go to **Import** tab
   - Upload `database/schema.sql`
   - Click **Go**

### **Step 3: Configure Database Connection**
1. **Edit `php/config.php`:**
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'switch_waste_db');
   define('DB_USER', 'switchwaste_user');
   define('DB_PASS', 'your_database_password');
   ```

### **Step 4: Email Configuration**
1. **Edit `php/config.php`:**
   ```php
   define('SMTP_HOST', 'smtp.gmail.com');
   define('SMTP_PORT', 587);
   define('SMTP_USERNAME', 'your-email@gmail.com');
   define('SMTP_PASSWORD', 'your-app-password');
   define('ADMIN_EMAIL', 'admin@switchwaste.co.za');
   ```

### **Step 5: Domain DNS Setup**
1. **Login to domain registrar**
2. **Update nameservers** to your hosting provider's nameservers
3. **Wait 24-48 hours** for DNS propagation

### **Step 6: SSL Certificate Setup**
1. **In cPanel** → **SSL/TLS**
2. **Install free Let's Encrypt certificate**
3. **Force HTTPS redirect**

---

## 🔧 **METHOD 3: CLOUDFLARE + HOSTING**

### **Step 1: Cloudflare Setup**
1. **Sign up at [cloudflare.com](https://cloudflare.com)**
2. **Add your domain** `switchwaste.co.za`
3. **Update nameservers** as instructed by Cloudflare

### **Step 2: Hosting Setup**
1. **Upload files** to your hosting provider
2. **Configure database** as in Method 2
3. **Set up SSL** through Cloudflare

### **Step 3: Cloudflare Optimization**
1. **Enable CDN** for faster loading
2. **Set up caching rules**
3. **Configure firewall rules**
4. **Enable minification**

---

## 🔧 **METHOD 4: AWS/GCP DEPLOYMENT**

### **AWS Lightsail (Simple)**
1. **Create Lightsail instance** (PHP stack)
2. **Connect via SSH**
3. **Upload files** via SCP or File Manager
4. **Configure Apache/Nginx**
5. **Set up MySQL database**
6. **Configure domain in Route 53**

### **Google Cloud Run (Advanced)**
1. **Containerize application** with Docker
2. **Deploy to Cloud Run**
3. **Set up Cloud SQL** for database
4. **Configure load balancer**
5. **Set up custom domain**

---

## 📋 **DOMAIN REGISTRATION CHECKLIST**

### **Before Registration**
- [ ] Choose domain name: `switchwaste.co.za`
- [ ] Check availability
- [ ] Choose registrar (Domains.co.za, Afrihost, etc.)
- [ ] Consider privacy protection
- [ ] Plan for future subdomains

### **Registration Process**
- [ ] Register primary domain
- [ ] Register `www` subdomain
- [ ] Set up auto-renewal
- [ ] Configure DNS settings
- [ ] Verify ownership

### **Post-Registration**
- [ ] Set up email accounts
- [ ] Configure DNS records
- [ ] Set up SSL certificate
- [ ] Test website loading
- [ ] Configure backups

---

## 🔍 **DNS RECORDS EXPLAINED**

### **Essential Records**
```
A Record (Root Domain)
Name: @
Value: [your-server-IP]
TTL: 3600

CNAME Record (WWW Subdomain)
Name: www
Value: @
TTL: 3600

MX Records (Email)
Name: @
Value: mail.your-hosting.com
Priority: 10
TTL: 3600
```

### **Optional Records**
```
TXT Record (SPF)
Name: @
Value: "v=spf1 include:_spf.google.com ~all"

TXT Record (DKIM)
Name: google._domainkey
Value: [DKIM-key-provided-by-Google]
```

---

## 🧪 **TESTING YOUR DOMAIN SETUP**

### **DNS Propagation Test**
```bash
# Check DNS records
nslookup switchwaste.co.za
nslookup www.switchwaste.co.za

# Check SSL certificate
openssl s_client -connect switchwaste.co.za:443
```

### **Website Testing**
- [ ] HTTP to HTTPS redirect
- [ ] www to non-www redirect (or vice versa)
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Mobile responsiveness
- [ ] Page speed (Google PageSpeed Insights)

### **Email Testing**
- [ ] Contact form emails arrive
- [ ] Admin notifications work
- [ ] Customer confirmations sent

---

## 🚨 **TROUBLESHOOTING COMMON ISSUES**

### **DNS Not Propagating**
- Wait 24-48 hours
- Clear DNS cache: `ipconfig /flushdns` (Windows)
- Check with different DNS servers (8.8.8.8, 1.1.1.1)

### **SSL Certificate Issues**
- Ensure domain is fully propagated
- Check certificate validity
- Verify certificate chain

### **Website Not Loading**
- Check file permissions (755 for directories, 644 for files)
- Verify PHP version compatibility
- Check Apache/Nginx configuration
- Review error logs

### **Database Connection Issues**
- Verify database credentials
- Check MySQL server status
- Ensure proper user permissions
- Test connection with phpMyAdmin

---

## 📞 **SUPPORT RESOURCES**

### **Domain Registrars**
- **Domains.co.za:** +27 21 689 9533
- **Afrihost:** +27 21 689 9533
- **Hetzner:** +27 21 970 4500

### **Hosting Support**
- **Check your hosting provider's documentation**
- **Use community forums** (Stack Overflow, Reddit)
- **Contact hosting support** for server-specific issues

### **DNS Tools**
- **DNS Checker:** [dnschecker.org](https://dnschecker.org)
- **MX Toolbox:** [mxtoolbox.com](https://mxtoolbox.com)
- **Google Admin Toolbox:** [toolbox.googleapps.com](https://toolbox.googleapps.com)

---

## ✅ **FINAL CHECKLIST**

- [ ] Domain registered and DNS configured
- [ ] SSL certificate installed and working
- [ ] Website files uploaded correctly
- [ ] Database configured and imported
- [ ] Email system tested and working
- [ ] All pages loading without errors
- [ ] Mobile responsiveness verified
- [ ] Contact form submissions working
- [ ] Backup system in place
- [ ] Monitoring tools configured

**Your website is now live and ready for business! 🎉**