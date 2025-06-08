# Academic Personal Website - Zheyu Yang

A clean, professional academic personal website built with HTML, CSS, and JavaScript. Designed to be hosted on GitHub Pages with no backend dependencies.

## 🌟 Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, academic-style design perfect for economists and researchers
- **Multiple Pages**: Home, Research, Teaching, CV, and Contact pages
- **PDF Integration**: Embedded CV viewer with fallback support
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **No Dependencies**: Pure HTML/CSS/JS - no build process required
- **GitHub Pages Ready**: Optimized for GitHub Pages hosting

## 📁 Project Structure

```
/
├── index.html              # Homepage with profile and research highlights
├── research.html           # Research papers and publications
├── teaching.html           # Teaching experience and philosophy  
├── cv.html                 # CV page with PDF embed
├── contact.html            # Contact information and social links
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with responsive design
│   ├── js/
│   │   └── script.js       # JavaScript for navigation and interactions
│   └── img/
│       └── profile-placeholder.jpg  # Profile photo (replace with yours)
├── cv/
│   └── cv.pdf              # Your CV PDF file
└── README.md               # This file
```

## 🚀 Quick Start Guide

### Step 1: Create GitHub Repository

1. **Sign in to GitHub** (create account if needed): https://github.com
2. **Create a new repository**:
   - Click the "+" icon in the top right → "New repository"
   - **Repository name**: `zheyu-yang.github.io` (replace "zheyu-yang" with your GitHub username)
   - ✅ **Public** (required for free GitHub Pages)
   - ✅ **Add a README file**
   - Click "Create repository"

### Step 2: Upload Website Files

**Option A: Upload via GitHub Web Interface**
1. Go to your new repository
2. Click "uploading an existing file"
3. Drag and drop all the website files into the browser
4. Write commit message: "Initial website upload"
5. Click "Commit changes"

**Option B: Use Git (if you have it installed)**
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
# Copy all website files to this directory
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** tab
2. Scroll down to **Pages** section (in the left sidebar)
3. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch**: `main` 
   - **Folder**: `/ (root)`
4. Click **Save**
5. GitHub will show: "Your site is published at https://yourusername.github.io"

### Step 4: Customize Your Content

1. **Add your profile photo**:
   - Replace `assets/img/profile-placeholder.jpg` with your photo
   - Recommended size: 400x400 pixels, square aspect ratio

2. **Upload your CV**:
   - Replace `cv/cv.pdf` with your actual CV PDF

3. **Update personal information**:
   - Edit `index.html`: Change name, bio, research interests
   - Edit `contact.html`: Update email, phone, office address
   - Edit `research.html`: Add your papers and publications
   - Edit `teaching.html`: Add your courses and experience

4. **Update links**:
   - Replace placeholder URLs with your actual profiles:
     - Google Scholar
     - ORCID
     - LinkedIn
     - GitHub
     - Twitter/X

## 📝 Customization Guide

### Updating Personal Information

**In `index.html`:**
```html
<!-- Update these sections -->
<h1 class="profile-name">Your Name</h1>
<h2 class="profile-title">Your Title</h2>
<p class="profile-bio">Your bio description...</p>

<!-- Update contact links -->
<a href="mailto:your.email@university.edu">Email</a>
<a href="https://scholar.google.com/your-profile">Google Scholar</a>
```

**In `contact.html`:**
```html
<!-- Update contact information -->
<a href="mailto:your.email@university.edu">your.email@university.edu</a>
<p>Your Office Address</p>
<p>Your University</p>
```

### Adding Research Papers

In `research.html`, add new papers using this template:

```html
<div class="paper-item">
    <div class="paper-header">
        <h3 class="paper-title">Your Paper Title</h3>
        <div class="paper-meta">
            <span class="paper-status">Working Paper</span>
            <span class="paper-date">2024</span>
        </div>
    </div>
    <div class="paper-authors">
        <strong>Your Name</strong>, Co-Author Name
    </div>
    <div class="paper-abstract">
        <p>Your paper abstract...</p>
    </div>
    <div class="paper-links">
        <a href="path/to/paper.pdf" class="btn btn-sm btn-primary">📄 PDF</a>
    </div>
</div>
```

### Changing Colors and Styling

The website uses CSS custom properties for easy customization. Edit `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;     /* Main blue color */
    --primary-hover: #1d4ed8;     /* Darker blue for hover */
    --text-primary: #1e293b;      /* Main text color */
    --text-secondary: #64748b;    /* Secondary text color */
    --background: #ffffff;        /* Page background */
    --background-alt: #f8fafc;    /* Alternate background */
}
```

## 🌐 Domain Setup (Optional)

If you want to use a custom domain like `yourname.com`:

1. **Buy a domain** from a registrar (Namecheap, GoDaddy, etc.)
2. **Add CNAME file** to your repository:
   - Create file named `CNAME` (no extension)
   - Content: `yourname.com`
3. **Configure DNS** at your domain registrar:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile navigation menu
- Responsive grid layouts
- Touch-friendly buttons
- Optimized typography for small screens

## 🔧 Troubleshooting

**Website not loading?**
- Check that repository name is `yourusername.github.io`
- Ensure repository is public
- Wait 5-10 minutes after enabling GitHub Pages

**Images not showing?**
- Check file paths are correct (case-sensitive)
- Ensure images are uploaded to correct folders
- Use relative paths (no leading slash)

**PDF not displaying?**
- Check `cv/cv.pdf` exists and is accessible
- Some browsers block PDF embeds - fallback content will show

**Mobile menu not working?**
- Ensure `assets/js/script.js` is uploaded
- Check browser console for JavaScript errors

## 📊 SEO and Analytics

The website is optimized for search engines with:
- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions
- Alt text for images

To add Google Analytics:
1. Get tracking code from Google Analytics
2. Add tracking script to `<head>` section of all HTML files

## 🤝 Contributing

This template is designed to be beginner-friendly. Common improvements:
- Add dark mode toggle
- Include publication metrics
- Add blog functionality
- Implement search feature

## 📄 License

This template is free to use for academic and personal websites. Attribution appreciated but not required.

## 🆘 Support

If you encounter issues:
1. Check this README thoroughly
2. Search GitHub Issues for similar problems  
3. Create a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Browser and device information

---

**Last Updated**: January 2025

**Template Version**: 1.0

**Compatible with**: GitHub Pages, any static hosting service 