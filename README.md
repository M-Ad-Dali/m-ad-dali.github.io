<div align="center">

# 🚀 Mohammed Al-Dali - Full-Stack Web Developer

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge&logo=github)](https://mohammed-al-dali.github.io/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)

**A modern, responsive, and bilingual portfolio website showcasing 2+ years of software engineering expertise**

[View Live Demo](https://mohammed-al-dali.github.io/) • [Report Bug](https://github.com/Mohammed-Al-Dali/mohammed-al-dali.github.io/issues) • [Request Feature](https://github.com/Mohammed-Al-Dali/mohammed-al-dali.github.io/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## 🎯 Overview

This is a **modern, professional portfolio website** built for Mohammed Al-Dali, a Full-Stack Web Developer specializing in building dynamic, scalable, and responsive web applications with PHP, Laravel, and modern frontend technologies. The website features a clean, responsive design, smooth animations, and optimized user experience.

### ✨ Highlights

- 📱 **Fully Responsive** - Optimized for all devices.
- ⚡ **Performance Optimized** - Fast loading times with clean code.
- 🎨 **Modern UI/UX** - Clean design with smooth animations.
- 🔍 **SEO Ready** - Semantic HTML and accessibility-focused markup.

---

## 🌟 Features

- **Professional Profile** - Summary detailing core strengths (System Architecture, Performance Optimization).
- **Technical Skills** - Categorized skills (Backend, Frontend, Databases, Tools).
- **Portfolio Showcase** - Projects (E-commerce, Restaurant Management, Heritage Portal).
- **Education** - Information Technology & Information Systems background.
- **Responsive Design** - Optimized across all devices.

---

## 🛠️ Tech Stack

| Technology            | Purpose                                 |
| --------------------- | --------------------------------------- |
| **Laravel (v10/v13)** | Robust backend, MVC, RESTful APIs       |
| **PHP**               | Core backend logic                      |
| **Tailwind CSS (v4)** | Modern, responsive UI styling           |
| **JavaScript (ES6+)** | Interactive functionality               |
| **Alpine.js**         | Lightweight interactive frontend        |
| **MySQL**             | Relational database design & management |

---

## 📁 Project Structure

```
mohammed-al-dali.github.io/
│
├── index.html                 # Main HTML file
│
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   │
│   ├── js/
│   │   └── main.js           # Core JavaScript functionality
│   │
│   ├── imgs/
│   │   ├── portfolio/        # Project screenshots
│   │   └── experience/       # Company logos
│   │
│   └── cv/                   # Downloadable CV files
│       ├── Mohammed Al-Dali ar-cv.pdf
│       └── Mohammed Al-Dali en-cv.pdf
│
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammed-Al-Dali/mohammed-al-dali.github.io.git
   ```

2. **Navigate to the project directory**
  ```bash
  cd mohammed-al-dali.github.io
  ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   python -m http.server 8000
   # OR
   npx serve
   ```

4. **View the website**
   - Open `http://localhost:8000` in your browser

---

## 🎨 Customization

### Updating Personal Information

1. **Edit HTML Content** (`index.html`)
   - Update name, title, and descriptions
   - Modify portfolio projects
   - Update experience timeline
   - Change contact information

2. **Update Translations** (`assets/js/lang.js`)
   - Edit English translations in `translations.en`
   - Edit Arabic translations in `translations.ar`

3. **Replace Images**
   - Profile picture: `assets/imgs/mee.png`
   - Portfolio screenshots: `assets/imgs/portfolio/`
   - Company logos: `assets/imgs/experience/`

4. **Update CV**
   - Replace the files inside `assets/cv/` with your updated CVs:
     - English version: `assets/cv/Mohammed Al-Dali en-cv.pdf`
     - Arabic version: `assets/cv/Mohammed Al-Dali ar-cv.pdf`
   - Update both English and Arabic versions to match your latest experience.

### Styling Customization

Edit `assets/css/style.css` to customize:
- Color scheme
- Typography
- Spacing and layout
- Animations and transitions

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `style.css`
3. Add translations in `lang.js`
4. Update navigation links

---

## 🌐 Deployment

### GitHub Pages (Current Deployment)

The website is automatically deployed via GitHub Pages:

1. **Push changes to main branch**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Pages will automatically deploy**
   - Live URL: `https://mohammed-al-dali.github.io/`

### Alternative Deployment Options

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Custom Server
Upload all files to your web server's public directory via FTP/SFTP.

---

## ⚡ Performance

### Optimization Techniques

- ✅ **Lazy Loading** - Images load only when visible
- ✅ **Preconnect** - DNS prefetching for Google Fonts
- ✅ **Deferred Scripts** - JavaScript loads after HTML parsing
- ✅ **Optimized Images** - Compressed portfolio screenshots
- ✅ **Minification Ready** - CSS and JS can be minified for production
- ✅ **Caching** - Browser caching for static assets

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

---

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

**Mobile Browsers**: Fully supported on iOS Safari and Android Chrome

---

## 🔍 SEO Optimization

### Implemented Features

- ✅ **Meta Tags** - Comprehensive title, description, and keywords
- ✅ **Open Graph** - Social media preview optimization
- ✅ **Twitter Cards** - Enhanced Twitter sharing
- ✅ **Schema.org** - Structured data for rich snippets
- ✅ **Semantic HTML** - Proper heading hierarchy and landmarks
- ✅ **Canonical URL** - Prevents duplicate content issues
- ✅ **Alt Text** - All images have descriptive alt attributes
- ✅ **Mobile-Friendly** - Responsive design with viewport meta tag
- ✅ **Fast Loading** - Optimized performance for better rankings

### Structured Data

The website includes JSON-LD structured data for:
- Person schema
- Job title and description
- Contact information
- Social profiles
- Education

--- 

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Mohammed Al-Dali** - Senior Software Engineer

- 📧 Email: [hmohammed.addali@gmail.com](mailto:mohammed.addali@gmail.com)
- 📱 Phone/WhatsApp: [+967 77 035 4220](https://wa.me/967770354220)
- 📱 Phone/WhatsApp: [+966 55 162 7912](https://wa.me/966551627912)
- 💼 LinkedIn: [Mohammed Al-Dali](https://www.linkedin.com/in/mohammed-al-dali-17b32b327/)
- 🐙 GitHub: [@M-Ad-Dali](https://github.com/M-Ad-Dali)
- 💬 Telegram: [@moka_3p.qe](https://t.me/moka_3p.qe)

**Portfolio**: [https://mohammed-al-dali.github.io/](https://mohammed-al-dali.github.io/)

---

<div align="center">

### 🌟 If you like this project, please give it a star! ⭐

**Made with ❤️ by Mohammed Al-Dali**

</div>