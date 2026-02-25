# Ifechukwu Ikenta - Professional Portfolio Website

A modern, minimal, and fully responsive portfolio website built with **HTML5**, **CSS3**, and **Vanilla JavaScript**.

## 🎨 Features

### Design & Styling
- ✅ **Modern Minimal Design** - Clean, professional aesthetic with high whitespace
- ✅ **Light & Dark Mode** - Seamless theme toggle with localStorage persistence
- ✅ **Fully Responsive** - Optimized for mobile (320px), tablet (768px), and desktop (1200px+)
- ✅ **Smooth Animations** - Subtle fade-in and hover effects
- ✅ **Professional Typography** - System fonts for fast loading and universal compatibility

### Sections
1. **Navbar** - Fixed navigation with theme toggle and mobile hamburger menu
2. **Hero Section** - Centered intro with CTA buttons
3. **About Section** - Professional introduction with highlighted skills
4. **Skills Section** - 6 skill cards with hover animations
5. **Projects Section** - Responsive grid with project cards (3 featured projects)
6. **Services Section** - 4 service offerings in a minimal card layout
7. **Contact Section** - Contact form with JS validation and contact info
8. **Footer** - Links, social media placeholders, and copyright

### JavaScript Functionality
-  **Mobile Menu Toggle** - Hamburger menu for screens ≤768px
-  **Light/Dark Mode Toggle** - Theme preference saved to localStorage
-  **Form Validation** - Real-time name, email, and message validation
-  **Scroll Reveal Animations** - Elements fade in as you scroll (using Intersection Observer)
-  **Smooth Scrolling** - Smooth navigation between sections
-  **Active Nav Link Highlighting** - Current section indicator in navbar
-  **Spam Prevention** - Form submission cooldown

##  File Structure

```
portfolio/
├── index.html       # Main HTML structure
├── style.css        # Complete styling with light/dark mode
├── script.js        # All JavaScript functionality
├── images/          # Project images and assets (empty - ready for images)
└── README.md        # This file
```

##  Quick Start

1. **Open the Portfolio**
   - Open `index.html` in your browser
   - No build process required, no dependencies!

2. **Customize Content**
   - Update name and tagline in the hero section
   - Replace project details in the projects section
   - Update social links in the footer
   - Modify contact email and WhatsApp links

3. **Add Your Images**
   - Create an `images/` folder in the portfolio directory
   - Replace placeholder image URLs with your own project images
   - Update social media links in the footer

##  Design Specifications

### Color Scheme
**Light Mode:**
- Background: `#ffffff` (white)
- Text: `#111111` (dark gray)
- Cards: `#f5f5f5` (light gray)
- Accent: `#3a7afe` (blue)

**Dark Mode:**
- Background: `#0f1115` (near black)
- Text: `#ffffff` (white)
- Cards: `#1a1d23` (dark gray)
- Accent: `#3a7afe` (same blue)

### Typography
- **Font Family:** System fonts (-apple-system, BlinkMacSystemFont, etc.)
- **Hero Title:** 72px (responsive down to 36px on mobile)
- **Section Title:** 42px
- **Body Text:** 16px
- **Line Height:** 1.6

### Spacing & Layout
- **Container Max Width:** 1200px
- **Padding:** 80px (desktop), 50px (tablet), 40px (mobile)
- **Gap Between Elements:** 30-60px (adaptive)
- **Card Padding:** 20-40px (adaptive)

##  Responsive Breakpoints

| Device | Width | Behavior |
|--------|-------|----------|
| Mobile | ≤480px | Single column, hamburger menu, compact navbar |
| Mobile+ | 480px - 768px | Optimized mobile layout, no hamburger menu |
| Tablet | 768px - 1024px | 2-column layouts, collapsible sidebar |
| Desktop | ≥1024px | Full multi-column layout, fixed navbar |

### Responsive Features
- Navigation menu collapses at 768px
- Grid layouts adapt from 4 cols → 2 cols → 1 col
- Font sizes decrease proportionally on smaller screens
- Buttons stack vertically on mobile
- Forms take full width on mobile (preventing horizontal scrolling)

##  Customization Guide

### 1. Update Hero Section
```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-tagline">Your tagline text</p>
```

### 2. Add Projects
Replace the placeholder projects in the projects section with your own:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project</h3>
        <!-- Continue with description, tech tags, buttons -->
    </div>
</div>
```

### 3. Update Contact Info
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="https://wa.me/YOUR_PHONE_NUMBER">Message on WhatsApp</a>
```

### 4. Update Social Links
In the footer, replace social link placeholders:
```html
<li><a href="https://github.com/yourusername" aria-label="GitHub">GitHub</a></li>
<li><a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">LinkedIn</a></li>
```

### 5. Change Color Scheme
Edit the CSS variables at the top of `style.css`:
```css
:root {
    --primary-color: #3a7afe;  /* Change accent color */
    --text-light: #111111;      /* Light mode text */
    --bg-light: #ffffff;        /* Light mode background */
    /* ... */
}
```

##  Mobile Optimization Details

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Mobile Menu
- Hamburger button appears at 768px and below
- Menu slides in from the left
- Backdrop darkening for better UX
- Auto-closes when a link is clicked

### Touch-Friendly Design
- Buttons minimum 44x44px for easy tapping
- Adequate spacing between interactive elements
- Form inputs 16px (prevents auto-zoom on iOS)

### Performance on Mobile
- No frameworks or heavy dependencies
- CSS animations use GPU acceleration (`transform`, `opacity`)
- Images are lazy-loaded (using placeholder service)
- Minify CSS and JS for production

##  Dark Mode Implementation

Dark mode is implemented using:
1. **CSS Custom Properties (Variables)** - Easy to toggle
2. **data-theme Attribute** - Applied to `<html>` element
3. **localStorage** - Saves user preference across sessions

**To toggle theme:**
- Click the sun/moon icon in navbar
- Theme preference auto-saves to browser

**Code Example:**
```javascript
// Load theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Toggle theme
html.setAttribute('data-theme', newTheme);
localStorage.setItem('theme', newTheme);
```

##  Form Validation

The contact form validates:
- **Name:** Required, minimum 2 characters
- **Email:** Required, valid email format
- **Message:** Required, minimum 10 characters

Error messages appear inline below each field. Errors clear when user starts typing.

##  Animations & Interactions

### Hover Effects
- **Nav Links:** Underline animation on hover
- **Skill/Project Cards:** Lift effect (translateY -10px)
- **Buttons:** Slight lift and shadow enhancement
- **Icons:** Color change on hover

### Scroll Animations
- Cards fade in as they enter viewport (Intersection Observer)
- Active section highlighted in navbar while scrolling
- Navbar shadow appears after scrolling 50px

### Smooth Interactions
- Smooth scrolling to sections
- Smooth theme transitions
- Mobile menu slide animation
- Form submission feedback

##  Best Practices Implemented

✅ **Semantic HTML** - Proper use of semantic elements  
✅ **Accessibility** - ARIA labels, keyboard navigation  
✅ **Mobile-First** - Styles start mobile, enhance for larger screens  
✅ **Performance** - No external frameworks, minimal dependencies  
✅ **SEO-Friendly** - Proper meta tags, semantic structure  
✅ **Clean Code** - Well-commented, organized CSS and JS  
✅ **Progressive Enhancement** - Works without JavaScript (mostly)  
✅ **Cross-browser Compatible** - Tested on modern browsers  

## Deployment Options

### 1. GitHub Pages (Free)
```bash
# Push to GitHub repository
git push origin main
# Enable Pages in repository settings
# Your site will be live at: username.github.io/portfolio
```

### 2. Netlify (Free)
- Drag and drop the portfolio folder
- Auto-deploys with git push
- Free SSL certificate

### 3. Vercel (Free)
- Connect GitHub repository
- Auto-deploys on push
- Fast global CDN

### 4. Standard Hosting
- Upload files via FTP
- Works on any web server
- No special requirements

##  Browser Support

-  Chrome/Edge 90+
-  Firefox 88+
-  Safari 14+
-  iOS Safari 14+
-  Android Chrome

##  Future Enhancements

Potential improvements:
- [ ] Backend contact form processing
- [ ] Blog section with markdown support
- [ ] Client testimonials carousel
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Video background option

##  License

This portfolio template is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

##  Author

**Ifechukwu Ikenta**  
Frontend Web Developer

---

**Last Updated:** February 25, 2026  
**Version:** 1.0.0

For questions or support, feel free to reach out via the contact form on the website.
