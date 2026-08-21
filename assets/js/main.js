// Download CV functionality (تحميل الملفين معاً)
function downloadPDF() {
    const cvFiles = [
        { url: 'assets/cv/Mohammed Al-Dali en-cv.pdf', name: 'Mohammed Al-Dali en-cv.pdf' },
        { url: 'assets/cv/Mohammed Al-Dali ar-cv.pdf', name: 'Mohammed Al-Dali ar-cv.pdf' }
    ];

    cvFiles.forEach(cv => {
        const link = document.createElement('a');
        link.href = cv.url;
        link.download = cv.name;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

const downloadBtn = document.getElementById('download-cv');
if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadPDF);
}

// Smooth scroll animation for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== 'javascript:void(0)') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Scroll animations - fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar toggle functionality (القائمة للموبايل)
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('ul.nav');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.classList.toggle('is-active');
            navMenu.classList.toggle('show');
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        const navLinks = navMenu.querySelectorAll('.link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('is-active');
                navMenu.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // 2. Sticky navbar on scroll
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                navbar.classList.add('affix');
            } else {
                navbar.classList.remove('affix');
            }
        });
    }
    
    document.body.classList.add('loaded');
    
    // 3. Active nav link highlighting (مصحح بالكامل لمنع التداخل بين الأقسام)
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.custom-navbar .nav .link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        // إذا كان المستخدم في أعلى الصفحة تماماً، فعّل الـ Home حصراً
        if (scrollY < 150) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === '#home' || href === '#') {
                    link.classList.add('active');
                }
            });
            return;
        }
        
        // تتبع الأقسام بدقة بناءً على موقعها الحالي في الشاشة
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200; // هامش استباقي دقيق
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = sectionId;
            }
        });
        
        // تحديث الـ Active في الروابط بناءً على الـ ID النشط فعلياً
        if (currentSectionId) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();
});
