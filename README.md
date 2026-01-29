# Sai Krishna Rao - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Engineer. Built with HTML, CSS, and JavaScript.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- 🌓 **Dark/Light Theme**: Toggle between dark and light modes with preference persistence
- ⚡ **Fast Performance**: Optimized assets and lazy loading for quick page loads
- ♿ **Accessible**: Semantic HTML and ARIA attributes for screen readers
- 🎯 **Interactive**: Smooth scrolling, project filtering, and dynamic animations

## 📋 Sections

1. **Hero** - Introduction with social links and CTA buttons
2. **About** - Professional summary and key stats
3. **Skills** - Technologies and tools organized by category
4. **Experience** - Work history with timeline visualization
5. **Projects** - Featured projects with filtering capability
6. **Education** - Academic background and certifications
7. **Contact** - Get in touch form and contact information
8. **Footer** - Quick navigation and additional links

## 🚀 Getting Started

### Prerequisites

You need a web browser and optionally a local web server for the best experience.

### Local Development

#### Option 1: Live Server (VS Code Extension)

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Open the project folder in VS Code
3. Right-click on `index.html` and select "Open with Live Server"
4. The site will open in your browser at `http://localhost:5500`

#### Option 2: Python HTTP Server

```bash
# Navigate to the project directory
cd /path/to/Sai-Portfolio

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Option 3: Node.js HTTP Server

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to the project directory
cd /path/to/Sai-Portfolio

# Start the server
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

#### Option 4: Direct File Open

Simply open `index.html` in your web browser by double-clicking the file or dragging it into a browser window.

**Note:** Some features (like the contact form) may require a web server to function properly.

## 📁 Project Structure

```
Sai-Portfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with CSS variables
├── script.js           # JavaScript for interactions
├── assets/             # Images and media files
│   ├── profile.jpg     # Profile photo (replace with your own)
│   └── project-placeholder.jpg  # Project screenshots
├── Pages/              # Additional pages
│   ├── certifications.html
│   ├── contact.html
│   ├── interests.html
│   └── skills.html
└── README.md           # This file
```

## 🎨 Customization

### Replace Placeholder Content

1. **Profile Image**: Replace `assets/profile.jpg` with your own photo
2. **Project Screenshots**: Add your project images to the `assets/` folder
3. **Content**: Update text in `index.html` with your own information
4. **Colors**: Modify CSS variables in `styles.css` (line 8-30)
5. **Contact Form**: Replace `YOUR_FORM_ID` in `index.html` with your [Formspree](https://formspree.io/) form ID

### Theme Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --color-accent: #3b82f6;        /* Primary accent color */
  --color-accent-hover: #2563eb;  /* Hover state */
  --color-bg: #0a0e1a;            /* Background */
  --color-text-primary: #f1f5f9;  /* Main text color */
  /* ... more variables */
}
```

### Google Font

The site uses **Inter** font from Google Fonts. To change it:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your preferred font
3. Copy the `<link>` tag and replace the one in `index.html` (line 10-12)
4. Update `--font-family` in `styles.css`

## 📝 Contact Form Setup

The contact form uses [Formspree](https://formspree.io/) for backend processing:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. In `index.html`, find the contact form and update the action attribute:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID

Alternative: You can also use a `mailto:` link for direct email:
```html
<form id="contactForm" action="mailto:your@email.com" method="POST" enctype="text/plain">
```

## 🧪 Testing

### HTML Validation

Validate your HTML at [W3C Markup Validation Service](https://validator.w3.org/):
- Upload `index.html` or paste the URL if deployed
- Fix any errors or warnings

### Responsive Testing

Test on different devices:
- **Desktop**: 1920x1080, 1366x768
- **Tablet**: 768x1024, 820x1180
- **Mobile**: 375x667, 414x896

Use browser DevTools:
1. Press `F12` to open DevTools
2. Click the device toolbar icon (or press `Ctrl+Shift+M`)
3. Test different screen sizes

### Accessibility Testing

- Use [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- Check color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Navigate using only keyboard (Tab, Enter, Escape keys)

### Performance Testing

- Test with [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Check loading times with browser DevTools Network tab
- Optimize images if needed (use tools like [TinyPNG](https://tinypng.com/))

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select branch: `main` and folder: `/ (root)`
4. Click Save
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Configure build settings (or leave as default for static site)
4. Deploy!

### Vercel

1. Sign up at [Vercel](https://vercel.com/)
2. Import your Git repository
3. Deploy with one click

## 🔧 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 📧 Contact

- **Email**: saikrishnarao1803@gmail.com
- **LinkedIn**: [linkedin.com/in/saikrishnarao-polasani](https://www.linkedin.com/in/saikrishnarao-polasani)
- **GitHub**: [github.com/saikrishnarao1803](https://github.com/saikrishnarao1803)

---

**Note**: This is a redesigned version of the portfolio. Please replace all placeholder content with your actual information before deployment.

## 🎯 Next Steps

1. ✅ Replace placeholder images in `assets/` folder
2. ✅ Update all content sections with your information
3. ✅ Configure contact form with Formspree
4. ✅ Test on multiple devices and browsers
5. ✅ Validate HTML and check accessibility
6. ✅ Deploy to your preferred hosting platform
7. ✅ Share your new portfolio!

---

Built with ❤️ by Sai Krishna Rao
