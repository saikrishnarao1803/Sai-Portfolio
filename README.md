# Sai Krishna Rao — Data Engineer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring a dark theme with teal accents. This static site showcases professional experience, technical skills, projects, and education.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with teal/cerulean accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth scrolling, animations, and mobile navigation
- **Semantic HTML**: Accessibility-focused structure
- **CSS Variables**: Easy theme customization
- **Google Fonts**: Uses Inter font family for modern typography

## 📁 Project Structure

```
Sai-Portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete stylesheet with CSS variables
├── script.js           # Interactive JavaScript features
├── README.md           # This file
└── assets/
    ├── images/
    │   └── Profile pic.jpeg    # Profile photo
    └── resume/
        └── SaiKrishna_Resume.docx  # Resume document
```

## 🛠️ Local Development

### Method 1: Using Live Server (Recommended)

If you have VS Code with the Live Server extension:

1. Open the project folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The site will open in your browser at `http://localhost:5500`

### Method 2: Using Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

### Method 3: Using Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open your browser and navigate to: `http://localhost:8000`

### Method 4: Direct File Opening

Simply double-click `index.html` to open it in your default browser. Note: Some features may not work properly with the `file://` protocol.

## 🧪 Testing Your Changes

### Responsive Design Testing

Test the site at different breakpoints:
- **Mobile**: 375px, 414px
- **Tablet**: 768px, 1024px
- **Desktop**: 1280px, 1440px, 1920px

You can use:
- Browser DevTools (F12 → Toggle Device Toolbar)
- Chrome's Device Mode
- Firefox's Responsive Design Mode

### Browser Compatibility

Test in modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

### Accessibility Testing

1. Test keyboard navigation (Tab, Enter)
2. Test with a screen reader
3. Check color contrast ratios
4. Verify all images have alt text

## 📝 Customization Guide

### Updating Content

1. **Personal Information**: Edit the Hero and About sections in `index.html`
2. **Skills**: Modify the skills-grid section with your technologies
3. **Experience**: Update timeline-item entries with your work history
4. **Projects**: Replace placeholder projects with your actual projects
5. **Education**: Update education-card entries
6. **Contact**: Change email and phone in the Contact section

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --accent-primary: #14b8a6;    /* Main accent color */
  --accent-secondary: #0d9488;  /* Hover states */
  --bg-primary: #0a0e1a;        /* Main background */
  --bg-secondary: #131825;      /* Section backgrounds */
  /* ... more variables */
}
```

### Adding New Sections

Follow the existing section pattern:

```html
<section class="section" id="your-section">
  <div class="container">
    <h2 class="section-title">Your Title</h2>
    <!-- Your content here -->
  </div>
</section>
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Repository Settings → Pages
3. Select branch (usually `main`)
4. Choose `/ (root)` as the source
5. Click Save
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect your GitHub repo
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Cloudflare Pages**: Connect your repository for free hosting

## ✅ Before Committing Changes

- [ ] Test all navigation links
- [ ] Verify all images load correctly
- [ ] Check responsive design on mobile, tablet, and desktop
- [ ] Test form functionality (if added)
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Check for console errors in browser DevTools
- [ ] Test in multiple browsers
- [ ] Verify accessibility with Lighthouse

## 🐛 Troubleshooting

### Images not loading
- Check file paths are correct and case-sensitive
- Ensure images exist in the `assets/images/` directory
- Try using relative paths instead of absolute paths

### Styles not applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `styles.css` is linked correctly in HTML
- Verify no CSS syntax errors in browser DevTools

### JavaScript not working
- Check browser console for errors (F12)
- Ensure `script.js` is linked at the end of `<body>`
- Verify no syntax errors in the JavaScript file

## 📄 License

This project is open source and available for personal use.

## 📬 Contact

- **Email**: saikrishnarao1803@gmail.com
- **LinkedIn**: [saikrishnarao-polasani](https://www.linkedin.com/in/saikrishnarao-polasani)
- **GitHub**: [saikrishnarao1803](https://github.com/saikrishnarao1803)

---

**Note**: Replace placeholder content in the Projects section with your actual projects. The current projects are examples to demonstrate the layout.
