# Complete Portfolio Website Deployment Guide

Welcome! This comprehensive guide will help you publish your IT professional portfolio online and share it on ALL major platforms including JobStreet, LinkedIn, Facebook, and more.

## Table of Contents
1. [Local Testing](#local-testing)
2. [Free Hosting Options](#free-hosting-options)
3. [Premium Hosting Options](#premium-hosting-options)
4. [Publishing to Job Platforms](#publishing-to-job-platforms)
5. [Social Media Sharing](#social-media-sharing)
6. [Using Custom Domain](#using-custom-domain)
7. [SEO & Optimization](#seo--optimization)
8. [Advanced Features](#advanced-features)

---

## 1. Local Testing

Before publishing, test your portfolio locally:

### Windows Users:
1. Install Python if you don't have it: https://www.python.org/downloads/
2. Open Command Prompt in your portfolio folder
3. Run: `python -m http.server 8000`
4. Visit: http://localhost:8000 in your browser
5. Press Ctrl+C to stop the server

### Alternative (using VS Code):
1. Install "Live Server" extension by Ritwick Dey
2. Right-click on home.html
3. Select "Open with Live Server"

---

## 2. Free Hosting Options

### A. GitHub Pages (RECOMMENDED - Best for IT Professionals)

**Steps:**
1. Create a GitHub account: https://github.com/signup
2. Create a new repository named: `yourname.github.io`
   - Replace `yourname` with your GitHub username
3. Enable Pages: Settings → Pages → Source: main branch
4. Upload your files:
   - Clone: `git clone https://github.com/yourname/yourname.github.io.git`
   - Copy portfolio files into the folder
   - Commit & Push:
     ```
     git add .
     git commit -m "Add portfolio"
     git push
     ```
5. Your portfolio is live at: `https://yourname.github.io`

**Advantages:**
- ✓ Completely free
- ✓ Custom domain support
- ✓ HTTPS included
- ✓ Easy updates
- ✓ Professional appearance

### B. Netlify (Free Alternative)

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Deploy automatically
6. Get a free URL: `yourname.netlify.app`

### C. Vercel (Free Alternative)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Deploy with one click
5. Get URL: `yourname.vercel.app`

### D. Firebase Hosting (Google)

1. Go to https://firebase.google.com
2. Create account and project
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Login: `firebase login`
5. Initialize: `firebase init`
6. Deploy: `firebase deploy`
7. Get URL: `yourproject.web.app`

---

## 3. Premium Hosting Options

### A. Hostinger (₱99/month - Philippine Based)

1. Go to https://www.hostinger.ph
2. Choose "Web Hosting" plan
3. Register domain or use existing
4. Upload files via File Manager or FTP
5. Get professional hosting with better performance

### B. Bluehost (₱150/month)

1. Go to https://www.bluehost.com
2. Choose hosting plan
3. Use one-click WordPress install (optional)
4. Upload portfolio files
5. Get reliable hosting with 24/7 support

### C. DigitalOcean (₱200/month - Developer Friendly)

1. Go to https://www.digitalocean.com
2. Create droplet ($5/month)
3. Install Apache/Nginx
4. Upload files via SFTP
5. Get full server control

---

## 4. Publishing to Job Platforms

### A. JobStreet Philippines

**Method 1: Direct Profile Integration**
1. Go to https://www.jobstreet.com.ph
2. Create/Login to your account
3. Go to "My Profile" → "Edit Profile"
4. In "Personal Information" section, add:
   ```
   Website/Portfolio: https://yourname.github.io
   ```
5. In "Professional Summary", add:
   ```
   IT Professional with expertise in web development, network administration,
   and business operations. Skilled in React, Node.js, C#, and government tech projects.
   Portfolio: https://yourname.github.io
   ```
6. Add your skills, experience, and education
7. Save and publish

**Method 2: Resume Upload**
1. Prepare PDF resume with portfolio link
2. Upload to JobStreet
3. Include portfolio URL in resume summary

### B. LinkedIn

1. Go to https://www.linkedin.com
2. Update your profile:
   - **About Section**: Add portfolio link
   - **Experience**: Mention portfolio projects
   - **Featured**: Pin your portfolio link
3. Post: "Check out my IT portfolio showcasing web development, network projects, and government tech work!"
4. Join IT groups and share your portfolio

### C. Indeed Philippines

1. Go to https://ph.indeed.com
2. Create profile
3. Add portfolio link in "About" section
4. Upload resume with portfolio URL
5. Set up job alerts for IT positions

### D. Kalibrr

1. Go to https://www.kalibrr.com
2. Complete profile
3. Add portfolio link in "Portfolio" section
4. Highlight your IT skills and projects

### E. Glassdoor

1. Go to https://www.glassdoor.com.ph
2. Create profile
3. Add portfolio link
4. Write reviews and engage with community

---

## 5. Social Media Sharing

### Facebook Strategy:
1. **Personal Profile**: Add portfolio link to bio
2. **Timeline Post**:
   ```
   🚀 Just launched my IT portfolio!
   💻 Web Development | Network Admin | Government Tech
   📍 Sorsogon City, Philippines
   Check it out: https://yourname.github.io
   #IT #WebDeveloper #Philippines
   ```
3. **Join Groups**:
   - IT Jobs Philippines
   - Web Developers Philippines
   - Sorsogon Tech Community
   - DICT Alumni Network

### Instagram Strategy:
1. **Bio Link**: Add portfolio URL
2. **Stories**: Share portfolio screenshots
3. **Posts**: Tech-related content with portfolio link
4. **Hashtags**: #IT #WebDeveloper #Philippines #Sorsogon

### Twitter/X Strategy:
1. **Bio**: Include portfolio link
2. **Tweets**:
   ```
   Excited to share my IT portfolio! Featuring web development projects,
   network administration work, and government tech experience.
   Built with HTML, CSS, JS. Check it out! 👨‍💻
   https://yourname.github.io #IT #WebDev #Philippines
   ```

---

## 6. Using Custom Domain

### Step 1: Buy a Domain (₱300-500/year)
- **Philippine Providers**: DomainRegistry.ph, Namecheap.com
- **International**: GoDaddy.com, Namecheap.com
- **Recommended**: Get .com or .ph domain

### Step 2: Connect to GitHub Pages

**For Namecheap:**
1. Go to domain dashboard → "Manage" → "Advanced DNS"
2. Add A records:
   ```
   Type: A | Host: @ | Value: 185.199.108.153
   Type: A | Host: @ | Value: 185.199.109.153
   Type: A | Host: @ | Value: 185.199.110.153
   Type: A | Host: @ | Value: 185.199.111.153
   ```
3. Add CNAME record:
   ```
   Type: CNAME | Host: www | Value: yourname.github.io
   ```
4. GitHub Settings → Pages → Custom Domain: `yourdomain.com`
5. Wait 24-48 hours for DNS propagation

### Step 3: SSL Certificate
- GitHub Pages provides free SSL automatically
- Your site will be https://yourdomain.com

---

## 7. SEO & Optimization

### Basic SEO Setup:
Add to `<head>` in home.html:
```html
<meta name="description" content="Ariel Gino Gallon - IT Professional, Web Developer, Network Specialist from Sorsogon City, Philippines">
<meta name="keywords" content="IT, web developer, network, Philippines, Sorsogon, government tech, DICT">
<meta name="author" content="Ariel Gino Gallon">
<meta property="og:title" content="Ariel Gino - IT Professional Portfolio">
<meta property="og:description" content="IT Professional specializing in web development, network administration, and government technology projects">
<meta property="og:image" content="https://yourname.github.io/images/profilephoto.jpg">
<meta property="og:url" content="https://yourname.github.io">
```

### Google Search Console:
1. Go to: https://search.google.com/search-console
2. Add property: `https://yourname.github.io`
3. Verify ownership
4. Submit sitemap if needed

### Performance Optimization:
1. **Compress Images**: Use TinyPNG.com
2. **Minify Code**: Use online minifiers for CSS/JS
3. **Enable Caching**: Add cache headers
4. **CDN**: Consider using CDN for assets

---

## 8. Advanced Features

### A. Google Analytics
1. Go to https://analytics.google.com
2. Create property
3. Add tracking code to `<head>`:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### B. Contact Form Enhancement
Your portfolio already has a message button. To upgrade:

**EmailJS Integration (Free):**
1. Go to https://www.emailjs.com
2. Sign up and connect Gmail
3. Get Service ID and Public Key
4. Update script.js with EmailJS code

### C. Custom Domain Email
- Use Zoho Mail or Google Workspace for professional email
- Get email like: yourname@yourdomain.com

---

## Quick Deployment Checklist

- [ ] Test locally (localhost:8000)
- [ ] Create GitHub account and repository
- [ ] Push files to GitHub
- [ ] Enable GitHub Pages
- [ ] Verify live URL works
- [ ] Add to JobStreet profile
- [ ] Update LinkedIn with portfolio link
- [ ] Share on Facebook and other social media
- [ ] Test message button functionality
- [ ] Check mobile responsiveness
- [ ] Add custom domain (optional)
- [ ] Set up Google Analytics (optional)

---

## Platform-Specific URLs

**Your Portfolio URL:** `https://yourname.github.io`

**Share on these platforms:**
- JobStreet: Add to profile and resume
- LinkedIn: Add to about section and posts
- Facebook: Share in IT groups and timeline
- Instagram: Add to bio and stories
- Twitter: Tweet with portfolio link
- Indeed: Include in resume and profile
- Kalibrr: Add to portfolio section
- Glassdoor: Include in profile

---

## Support & Resources

- **GitHub Pages Help**: https://docs.github.com/en/pages
- **JobStreet Guide**: https://www.jobstreet.com.ph/help
- **HTML/CSS Learning**: https://www.w3schools.com
- **Portfolio Inspiration**: https://dribbble.com
- **Domain Registration**: https://domainregistry.ph
- **Philippine IT Jobs**: https://www.jobstreet.com.ph/it-jobs

---

**Questions?** Use the message button on your portfolio - it sends directly to your email!

**Last Updated:** May 8, 2026

### Method 3: Share Portfolio Link

- Share your live URL directly: `https://yourname.github.io`
- Add to your email signature
- Share on Facebook/LinkedIn
- Include in applications

---

## 4. Using Custom Domain

### Step 1: Buy a Domain (Optional)
- Recommended: Namecheap.com, GoDaddy, or local Philippine providers
- Cost: ~₱300-500 per year

### Step 2: Connect to GitHub Pages

**If using Namecheap:**
1. Go to your domain dashboard
2. Click "Manage" → "Advanced DNS"
3. Add these records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: yourname.github.io
   ```
4. In GitHub Settings → Pages → Custom Domain:
   - Enter: `yourdomain.com`
5. Wait 24 hours for DNS to propagate
6. Access at: `https://yourdomain.com`

---

## 5. Sharing & Promotion

### Social Media Links (Already Included):
- ✓ Facebook: facebook.com/arielgino.gallon.5
- ✓ Instagram: instagram.com/gino_ravede
- ✓ Email: ginobarreda111@gmail.com
- ✓ Phone: +63 938 058 2953

### Sharing Strategy:

1. **LinkedIn** (If you have account):
   - Update profile with portfolio link
   - Share: "Check out my IT portfolio!"
   - Include project highlights

2. **Facebook**:
   - Share portfolio link on timeline
   - Post in IT/Tech job groups
   - Tag MakerSpace Sorsogon and DICT

3. **Email Outreach**:
   - Send portfolio link to tech companies
   - Include in your resume
   - Add to job applications

4. **JobStreet Optimization**:
   - Title: "IT Professional | Network Specialist"
   - Summary: Copy from your Hero section
   - Location: Sorsogon City, Philippines
   - Skills: Frontend, Backend, UI/UX, Networking, IT Support
   - Salary: Set to your expectation
   - Availability: Open to opportunities

---

## 6. Contact Form Setup

Your portfolio includes a contact form. Currently, it sends to your email via mailto link.

### To Upgrade (Optional):

**Option A: EmailJS (Recommended - Free)**
1. Go to https://www.emailjs.com
2. Sign up for free
3. Connect your email
4. Get your `Service ID` and `Public Key`
5. Update script.js:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send("YOUR_SERVICE_ID", "template_id", {
       from_name: name,
       from_email: email,
       to_email: "ginobarreda111@gmail.com",
       message: message
   });
   ```

**Option B: Use a Backend Service**
- Consider services like Formspree, Basin, or SendGrid

---

## 7. SEO Optimization (Bonus)

To help employers find you easily:

1. Add to `<head>` in home.html:
```html
<meta name="description" content="Ariel Gino Gallon - IT Professional, Web Developer, Network Specialist from Sorsogon City">
<meta name="keywords" content="IT, web developer, network, Philippines, Sorsogon">
<meta property="og:image" content="images/profilephoto.jpg">
```

2. Submit to Google Search Console:
   - Go to: https://search.google.com/search-console
   - Verify your domain
   - Submit sitemap

---

## 8. Maintenance Tips

- **Update regularly**: Add new projects every month
- **Keep contact info current**: Check emails weekly
- **Track visitors**: Use Google Analytics
- **Mobile test**: Always test on phones
- **Update skills**: Add new technologies as you learn them

---

## Quick Deployment Checklist

- [ ] Test locally (localhost:8000)
- [ ] Create GitHub account
- [ ] Create `username.github.io` repository
- [ ] Push files to GitHub
- [ ] Enable GitHub Pages
- [ ] Visit your URL to verify
- [ ] Add to JobStreet profile
- [ ] Share on social media
- [ ] Test contact form
- [ ] Mobile responsiveness check

---

## Support Resources

- GitHub Docs: https://docs.github.com/en/pages
- JobStreet Philippines: https://www.jobstreet.com.ph
- HTML/CSS Help: https://www.w3schools.com
- Portfolio Best Practices: https://dribbble.com

---

**Questions?** Your portfolio includes a contact form - employers will reach out directly!

**Last Updated:** May 7, 2026
