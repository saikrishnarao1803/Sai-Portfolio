# Sai Krishna Rao — Portfolio

A modern, responsive portfolio website showcasing data engineering skills, experience, and projects. Built with clean HTML, CSS, and JavaScript.

## ✨ Features

- **Modern Design**: Dark theme with teal accent color (#64ffda)
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Keyboard navigation support and proper ARIA labels
- **Smooth Animations**: Intersection Observer API for scroll animations
- **Fast & Lightweight**: No frameworks, pure vanilla JavaScript
- **SEO Optimized**: Semantic HTML5 structure

## 🚀 Local Preview

### Option 1: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. Your browser will open at `http://localhost:5500` (or similar)

### Option 2: Using Python's HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: Direct File Access
Simply open `index.html` directly in your web browser (double-click the file).

## 📁 Project Structure

```
Sai-Portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Modern CSS with variables and responsive design
├── script.js           # Interactive features and animations
├── README.md           # This file
├── assets/
│   ├── images/
│   │   ├── profile.jpg              # Profile picture
│   │   └── projects/                # Project screenshots
│   │       ├── placeholder1.svg     # Replace with real screenshots
│   │       ├── placeholder2.svg
│   │       └── placeholder3.svg
│   └── resume/
│       └── SaiKrishna_Resume.docx   # Resume file
└── Pages/              # Legacy pages (can be archived)
```

## 🎨 Customization Guide

### Update Content (TODOs)
The portfolio includes several `<!-- TODO -->` comments marking areas that need your input:

1. **About Section**: Add your professional background and journey
2. **Skills Section**: Extract and expand skill list from your resume
3. **Experience Section**: Add full job descriptions and achievements from `SaiKrishna_Resume.docx`
4. **Projects Section**: Replace placeholder cards with real project details
5. **Education Section**: Extract education details from your resume

### Add Project Screenshots
Replace the placeholder SVG files in `assets/images/projects/` with real project screenshots:
- Recommended size: 400x250px or larger
- Supported formats: JPG, PNG, WebP
- Update the `<img>` tags in `index.html` to point to your images

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --bg-primary: #0a192f;      /* Main background */
  --accent-primary: #64ffda;   /* Teal accent color */
  /* ... other variables ... */
}
```

## 🌐 Deploy to GitHub Pages

This site is already configured for GitHub Pages:

1. Merge the pull request to `main` branch
2. Go to **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` → `/ (root)` → **Save**
5. Your site will be live at `https://saikrishnarao1803.github.io/Sai-Portfolio/`

## 📝 Pull Request Workflow

To review and merge this redesign:

1. **Review the changes** in the pull request
2. **Test locally** using the preview options above
3. **Update TODO sections** with your actual content from the resume
4. **Replace placeholder images** with real project screenshots
5. **Approve and merge** when ready to go live

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

For questions or issues:
- Email: saikrishnarao1803@gmail.com
- LinkedIn: [linkedin.com/in/saikrishnarao-polasani](https://www.linkedin.com/in/saikrishnarao-polasani)
- GitHub: [@saikrishnarao1803](https://github.com/saikrishnarao1803)

---

**Note**: This redesign maintains all original assets and adds a modern, professional look. The profile picture and resume are already linked in the appropriate sections.
