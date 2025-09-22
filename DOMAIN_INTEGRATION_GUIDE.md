# DOMAIN INTEGRATION GUIDE - Switch Waste Management Solutions

## 📋 **OVERVIEW**

This guide provides step-by-step instructions for integrating your Switch Waste website with a custom domain name.

The recommended method for this React project is to use Netlify, which provides a seamless workflow for deployment, custom domains, and SSL.

---

## 🔧 **NETLIFY DEPLOYMENT & DOMAIN SETUP (RECOMMENDED)**

### **Step 1: Sign Up for Netlify**

1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Deploy Your Site**

1. Click **"Add new site"** → **"Import an existing project"**.
2. **Connect to GitHub** and authorize Netlify.
4. **Select your repository** (`switch-waste-pro-git`).
5. Netlify will auto-detect the build settings. Verify they are correct:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`
6. Click **"Deploy site"**. Your site will be live at a random Netlify URL (e.g., `random-name.netlify.app`).

### **Step 3: Custom Domain Setup**

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `www.switchwaste.co.za`
4. Click **"Verify"**

### **Step 4: DNS Configuration**
1. **Login to your domain registrar** (e.g., Domains.co.za, Afrihost)
2. **Go to DNS settings** for `switchwaste.co.za`
3. **Add these DNS records:**

   - **If you want `www.switchwaste.co.za` to be primary:**
     ```
     Type: CNAME
     Name: www
     Value: your-netlify-site-name.netlify.app
     ```

   - **If you want `switchwaste.co.za` (root domain) to be primary:**
     ```
     Type: A
     Name: @
     Value: 75.2.60.5 (Netlify's load balancer IP)
     ```

4. **Save changes** (DNS propagation takes 24-48 hours)

### **Step 5: SSL Certificate**

- Netlify provides **free SSL certificates**
- HTTPS will be automatically enabled
- No additional configuration is needed.

---

## 🧪 **TESTING YOUR DOMAIN SETUP**

### **DNS Propagation Test**

```bash
# Check DNS records after a few hours
nslookup switchwaste.co.za
nslookup www.switchwaste.co.za
```

```bash
# Check SSL certificate
openssl s_client -connect www.switchwaste.co.za:443
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

### **Website Not Loading or Form Issues**
- Check the deploy logs in Netlify for any build errors.
- Ensure the `_redirects` file is present in the `public` directory.
- For form issues, verify the `data-netlify="true"` attribute and the hidden form name input are on your `<form>` tag.

---

## 📞 **SUPPORT RESOURCES**

### **Domain Registrars**
- **Domains.co.za:** +27 21 689 9533
- **Afrihost:** +27 21 689 9533
- **Hetzner:** +27 21 970 4500

### **DNS Tools**
- **DNS Checker:** [dnschecker.org](https://dnschecker.org)
- **MX Toolbox:** [mxtoolbox.com](https://mxtoolbox.com)
- **Google Admin Toolbox:** [toolbox.googleapps.com](https://toolbox.googleapps.com)

---

## ✅ **FINAL CHECKLIST**

- [ ] Domain registered and DNS configured
- [ ] SSL certificate installed and working
- [ ] Netlify site deployed and live
- [ ] All pages loading without errors
- [ ] Mobile responsiveness verified
- [ ] Contact form submissions working

**Your website is now live and ready for business.**