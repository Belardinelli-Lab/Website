# Deployment Guide - Brain Plasticity Laboratory Website

## Overview

This guide provides instructions for deploying the Brain Plasticity Laboratory website to various hosting platforms.

## Deployment Options

### 1. University Web Server (Recommended)

Since this is for the University of Trento, the best option would be to deploy on the university's web server.

**Contact Information:**
- IT Services at University of Trento
- CIMeC IT support for domain integration

**Benefits:**
- Official university domain
- Integrated with university systems
- Professional credibility
- Potential integration with university databases

### 2. GitHub Pages (Free)

A free option for hosting static websites directly from a GitHub repository.

**Steps:**
1. Create a GitHub repository
2. Upload all website files to the repository
3. Enable GitHub Pages in repository settings
4. Access via `https://[username].github.io/[repository-name]`

**Advantages:**
- Free hosting
- Version control
- Easy updates
- Custom domain support

### 3. Netlify (Free/Paid)

Modern hosting platform with excellent features for static sites.

**Steps:**
1. Create account at netlify.com
2. Connect GitHub repository or drag & drop files
3. Automatic deployment on file changes
4. Custom domain available

**Features:**
- Free tier available
- Automatic HTTPS
- Form handling
- Analytics
- CDN distribution

### 4. Vercel (Free/Paid)

Another modern hosting platform similar to Netlify.

**Steps:**
1. Create account at vercel.com
2. Import from GitHub repository
3. Automatic deployment
4. Custom domain support

### 5. Traditional Web Hosting

Any standard web hosting provider can host this static website.

**Requirements:**
- Basic web hosting (no server-side requirements)
- Support for HTML, CSS, JavaScript files
- Custom domain support

## Pre-Deployment Checklist

### Content Review
- [ ] Verify all team member information is correct
- [ ] Update contact information
- [ ] Review research descriptions
- [ ] Check collaboration details
- [ ] Verify grant information

### Technical Review
- [ ] Test website on different browsers
- [ ] Check mobile responsiveness
- [ ] Validate HTML markup
- [ ] Optimize images for web
- [ ] Test all internal links
- [ ] Verify external links work

### SEO Optimization
- [ ] Add proper meta descriptions
- [ ] Optimize page titles
- [ ] Include alt text for images
- [ ] Create sitemap.xml
- [ ] Set up robots.txt

### Performance Optimization
- [ ] Optimize image file sizes
- [ ] Minify CSS and JavaScript
- [ ] Enable compression
- [ ] Set up proper caching headers

## Custom Domain Setup

### For University Domain (e.g., brainplasticity.cimec.unitn.it)

1. Contact university IT services
2. Request subdomain creation
3. Provide hosting platform's DNS requirements
4. Configure DNS settings as instructed

### For Custom Domain

1. Purchase domain from registrar
2. Update DNS settings to point to hosting platform
3. Configure SSL certificate (usually automatic)
4. Test domain functionality

## File Structure for Deployment

Ensure the following structure is maintained:

```
Website Root/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   ├── config.js
│   └── main.js
├── Pictures/
│   ├── Logos/
│   │   ├── CIMeC.webp
│   │   └── Unitn.jpg
│   └── Team members/
│       └── Paolo Belardinelli.jpeg
└── README.md
```

## Environment-Specific Configurations

### Production Settings

Update `scripts/config.js` for production:
- Add Google Analytics ID if available
- Update contact information
- Set production URLs
- Enable/disable features as needed

### Analytics Setup

1. Create Google Analytics account
2. Generate tracking ID
3. Add tracking ID to config.js
4. Verify tracking is working

## Security Considerations

### Basic Security Headers

Add to `.htaccess` (Apache) or server configuration:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS

Ensure the website is served over HTTPS:
- Most modern hosting platforms provide this automatically
- For custom setups, obtain SSL certificate
- Redirect HTTP to HTTPS

## Monitoring and Maintenance

### Regular Updates
- Update team member information as needed
- Add new publications
- Update research descriptions
- Refresh collaboration information

### Performance Monitoring
- Set up Google Analytics or similar
- Monitor page load speeds
- Check for broken links regularly
- Test mobile compatibility

### Backup Strategy
- Keep local copies of all files
- Version control with Git
- Regular backups of any dynamic content

## Support and Contact

For technical issues with deployment:
- University IT Services (for university hosting)
- Hosting platform support documentation
- Web development team if available

## Troubleshooting Common Issues

### Images Not Loading
- Check file paths are correct
- Verify image files exist in Pictures folder
- Ensure proper file permissions

### CSS/JavaScript Not Working
- Verify file paths in HTML
- Check for syntax errors
- Test in different browsers

### Mobile Display Issues
- Test responsive design on various devices
- Check viewport meta tag
- Validate CSS media queries

### Slow Loading
- Optimize image file sizes
- Minimize CSS/JS files
- Enable compression on server

---

*Last updated: November 2024*