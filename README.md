# Sai Krishna Rao — Modern Portfolio Site

A modern, responsive portfolio website showcasing data engineering skills, experience, and projects. Built with HTML, CSS, and vanilla JavaScript. Optimized for GitHub Pages deployment.

## 🎨 Design Features

- **Modern Dark Theme** with teal/cerulean accent colors
- **Fully Responsive** design that works on all devices
- **Smooth Animations** and transitions
- **Accessible** keyboard navigation and ARIA labels
- **Inter Font** from Google Fonts for clean typography
- **Semantic HTML5** structure

## 📂 Project Structure

```
Sai-Portfolio/
├── index.html              # Main portfolio page
├── styles.css              # Modern responsive stylesheet
├── script.js               # Interactive functionality
├── README.md               # This file
├── assets/
│   ├── images/
│   │   ├── profile.jpg     # Profile picture
│   │   ├── project1.svg    # Placeholder project image
│   │   ├── project2.svg    # Placeholder project image
│   │   └── project3.svg    # Placeholder project image
│   └── resume/
│       └── SaiKrishna_Resume.docx  # Resume file
└── Pages/                  # Additional pages (legacy)
```

## 🚀 Local Development & Testing

### Method 1: Using Live Server (Recommended)

If you're using VS Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open at `http://localhost:5500`

### Method 2: Using Python HTTP Server

```bash
# Navigate to project directory
cd /path/to/Sai-Portfolio

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser to: http://localhost:8000
```

### Method 3: Using Node.js http-server

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run server
http-server -p 8000

# Open browser to: http://localhost:8000
```

### Method 4: Direct File Open

Simply double-click `index.html` or open it in your browser. Note: Some features may not work without a server.

## 📝 Customization Guide

### Content to Update

1. **Profile Information** (index.html)
   - Update hero section with your details
   - Replace placeholder project descriptions
   - Add your real project screenshots/images
   - Extract and add complete experience from resume DOCX

2. **Education Details** (index.html)
   - Add degree details from resume
   - Add certifications and courses

3. **Projects Section**
   - Replace placeholder SVG images with real project screenshots
   - Update project titles, descriptions, and links
   - Modify tech tags to match your projects

4. **Contact Form**
   - Integrate with backend service (Formspree, EmailJS, etc.)
   - Or replace with static contact information only

### Styling Customization

Edit `styles.css` CSS variables to change colors:

```css
:root {
  --accent-primary: #14b8a6;    /* Main teal accent */
  --accent-secondary: #0d9488;  /* Darker teal */
  --bg-primary: #0f1419;        /* Dark background */
  --text-primary: #e8edf4;      /* Light text */
}
```

## 🌐 Publishing to GitHub Pages

### Option 1: Settings UI

1. Push all changes to your repository
2. Go to repository **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` → `/ (root)` → **Save**
5. Your site will be live at: `https://saikrishnarao1803.github.io/Sai-Portfolio/`

### Option 2: GitHub Actions (Automatic)

GitHub Pages will auto-deploy when you push to the main branch.

## ✅ TODO List for Owner

- [ ] **Extract complete work experience** from SaiKrishna_Resume.docx
- [ ] **Add education details** (degrees, institutions, years)
- [ ] **Add certifications** from resume
- [ ] **Replace project placeholders** with real projects
- [ ] **Add project screenshots** (replace SVG placeholders)
- [ ] **Update project descriptions** and add GitHub/demo links
- [ ] **Test contact form** integration (Formspree/EmailJS)
- [ ] **Verify all links** work correctly
- [ ] **Test responsive design** on mobile/tablet
- [ ] **Review accessibility** features

## 🔧 Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+, Vanilla JS)
- Google Fonts (Inter)
- SVG Graphics

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Personal portfolio site. All rights reserved.

## 📧 Contact

- **Email**: saikrishnarao1803@gmail.com
- **GitHub**: [@saikrishnarao1803](https://github.com/saikrishnarao1803)
- **LinkedIn**: [Sai Krishna Rao Polasani](https://www.linkedin.com/in/saikrishnarao-polasani)

---

**Note**: This redesign includes placeholder content marked with 📝 TODO. Please review and replace placeholders with your actual content before making the site public.
