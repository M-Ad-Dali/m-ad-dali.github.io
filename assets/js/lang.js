// Language Translation System
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.education': 'Education',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',

        // Header
        'header.greeting': "Hello, I'm",
        'header.name': 'Mohammed Al-Dali',
        'header.title': 'Full Stack Web Developer',
        'header.subtitle': 'Backend-Focused Full-Stack Developer | Laravel',
        'header.tagline': 'Transforming ideas into scalable, high-performance web solutions',
        'header.viewWork': 'View My Work',
        'header.contactMe': 'Contact Me',

        // About Section
        'about.subtitle': 'Who Am I ?',
        'about.title': 'About Me',
        'about.p1': 'Backend-Focused Full-Stack Developer with <strong>hands-on experience</strong> building dynamic and scalable web applications using <strong>Laravel, PHP, and JavaScript</strong>. Experienced in designing database architectures, custom features, and responsive user interfaces.',
        'about.p2': 'Worked across <strong>e-commerce, dynamic web applications, and interactive user platforms</strong> using <strong>Tailwind CSS and Alpine.js</strong>. Passionate about clean code, performance optimization, and delivering reliable software solutions.',
        'about.downloadCV': 'Download CV',
        'about.stats.experience': 'Years Experience',
        'about.stats.projects': 'Projects Completed',
        'about.highlights.fullstack': 'Full-Stack Development',
        'about.highlights.modern': 'Modern Web Technologies',
        'about.highlights.scalable': 'Scalable Solutions',

        // Skills Section
        'skills.subtitle': 'My Expertise',
        'skills.title': 'Technical Skills',
        'skills.backend': 'Backend Development',
        'skills.frontend': 'Frontend Development',
        'skills.database': 'Database & Tools',


        // Portfolio Section
        'portfolio.subtitle': 'What I Did ?',
        'portfolio.title': 'Portfolio',
        'portfolio.ecommerce_platform.title': 'Digital Store',
        'portfolio.ecommerce_platform.desc': 'A digital store specializing in the sale of "digital products."',
        'portfolio.online-food.title': 'Online Food Ordering System',
        'portfolio.online-food.desc': 'Restaurant food ordering app with delivery service.',
        'portfolio.dashboard.title': 'Custom-Built Admin Panel',
        'portfolio.dashboard.desc': 'A custom-developed dashboard reflecting the engineering architecture.',
        'portfolio.hrms.title': 'HRMS',
        'portfolio.hrms.desc': 'A human resources management system for handling employee data and payroll.',
        'portfolio.yemen-old.title': 'Yemen Old',
        'portfolio.yemen-old.desc': 'A site reflecting Yemens ancient heritage and civilization.',
        'portfolio.digital.title': '62',
        'portfolio.digital.desc': '62 Company – Providing comprehensive graphic design services.',
        'portfolio.portfolio.title': 'Portfolio Mohammed Nassari',
        'portfolio.portfolio.desc': 'Web application for Mohamed Nassaris personal profile',
        'portfolio.landing.title': 'Bondi',
        'portfolio.landing.desc': 'Static Product Showcase Landing Page.',
        'portfolio.pg-sms.title': 'Masters Student Data',
        'portfolio.pg-sms.desc': 'Application for managing Masters student data.',

        // CTA Section
        'cta.badge': 'Available for Projects',
        'cta.title': "Let's Build Something Amazing Together",
        'cta.description': "I'm currently available for freelance projects and full-time opportunities. Whether you need a complete web application or want to enhance your existing system, I can help bring your vision to life.",
        'cta.benefit1': '5+ Years Experience',
        'cta.benefit2': 'Fast Response Time (< 24h)',
        'cta.benefit3': 'Quality Guaranteed',
        'cta.button1': 'Get in Touch',
        'cta.button2': 'WhatsApp Me',
        'cta.note': 'Typical response time: Within 24 hours',
        'cta.stat1': 'Projects Completed',
        'cta.stat2': 'Years Experience',
        'cta.stat3': 'Client Satisfaction',

        // Projects Section
        'projects.subtitle': 'What Have I Built?',
        'projects.title': 'Featured Projects',

        // Project 1 - Digital Products E-commerce Platform
        'project.ecommerce.title': 'Digital Products E-commerce Platform',
        'project.ecommerce.category': 'Full-Stack Web Application (Laravel)',
        'project.ecommerce.p1': 'Designed and developed a comprehensive full-stack e-commerce platform dedicated to selling digital products, gaming codes, and subscriptions using Laravel.',
        'project.ecommerce.p2': 'Engineered a robust MySQL database schema with optimized relational queries to seamlessly link digital inventory with user orders, ensuring 100% secure and automated instant delivery upon payment confirmation.',
        'project.ecommerce.p3': 'Integrated JavaScript and Alpine.js to introduce real-time interactive features, such as instant search filters and dynamic cart updates, reducing page reloads and enhancing user engagement.',

        // Project 2 - Dynamic Restaurant Management System
        'project.restaurant.title': 'Dynamic Restaurant Management System',
        'project.restaurant.category': 'Full-Stack Development',
        'project.restaurant.p1': 'Built a dynamic restaurant web application featuring an interactive digital food menu and complete administrative control.',
        'project.restaurant.p2': 'Implemented full CRUD operations backed by PHP, MySQL, and Laravel, enabling seamless user and data management.',
        'project.restaurant.p3': 'Leveraged JavaScript and jQuery to elevate user engagement, optimize client-server data flow, and ensure smooth, interruption-free interactions.',

        // Project 3 - Ancient Yemen Heritage Portal
        'project.heritage.title': 'Ancient Yemen Heritage Portal',
        'project.heritage.category': 'Frontend Development',
        'project.heritage.p1': 'Developed a static yet highly engaging informational website showcasing the history and culture of ancient Yemen.',
        'project.heritage.p2': 'Built with clean HTML5, CSS3, and JavaScript, featuring structured historical sections and a visually appealing, accessible design optimized for readability and optimal user experience.',

        // Education Section
        'education.subtitle': 'Academic Background',
        'education.title': 'Education',
        'education.period': '2020 - 2024',
        'education.degree': 'Bachelor of Science',
        'education.major': 'Information Technology',
        'education.university': 'Queen Arwa University, Yemen',

        // Contact Section
        'contact.subtitle': 'Let\'s Connect',
        'contact.title': 'Get In Touch',
        'contact.description': 'Have a project in mind? Let\'s discuss how I can help you achieve your goals.',


        'contact.email': 'Email',
        'contact.responseTime': 'Response time: < 24 hours',
        'contact.phone': 'Phone / WhatsApp',
        'contact.whatsapp': 'Message on WhatsApp',
        'contact.location': 'Location',
        'contact.locationValue': 'Yemen (Remote Work Available)',
        'contact.social': 'Connect on Social Media',
        'contact.available': 'Available for new projects',

        // Footer
        'footer.rights': 'Hamza Mughales'
    },
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.about': 'نبذة عني',
        'nav.portfolio': 'أعمالي',
        'nav.education': 'التعليم',
        'nav.experience': 'الخبرات',
        'nav.contact': 'تواصل معي',

        // Header
        'header.greeting': 'مرحباً، أنا',
        'header.name': 'محمد الدالي',
        'header.title': 'مطور ويب متكامل (Full-Stack Developer)',
        'header.subtitle': 'متخصص في الواجهة الخلفية | Laravel',
        'header.tagline': 'تحويل الأفكار إلى حلول ويب قابلة للتطوير وعالية الأداء',
        'header.viewWork': 'شاهد أعمالي',
        'header.contactMe': 'تواصل معي',

        // About Section
        'about.subtitle': 'من أنا؟',

        'about.p1': 'مطور ويب متكامل (تركيز على الواجهة الخلفية) بخبرة عملية في بناء تطبيقات ويب ديناميكية وقابلة للتوسع باستخدام <strong>Laravel و PHP و JavaScript</strong>. خبرة في تصميم قواعد البيانات، وتطوير المزايا البرمجية، وتصميم واجهات مستخدم متجاوبة.',
        'about.p2': 'عملت في تطوير <strong>المتاجر الإلكترونية وتطبيقات الويب التفاعلية</strong> باستخدام <strong>Tailwind CSS و Alpine.js</strong>. شغوف بكتابة كود نظيف، وتحسين الأداء، وتقديم حلول برمجية موثوقة تلبي احتياجات المستخدمين.',
        'about.downloadCV': 'تحميل السيرة الذاتية',
        'about.stats.experience': 'سنوات خبرة',
        'about.stats.projects': 'مشروع مكتمل',
        'about.highlights.fullstack': 'تطوير ويب متكامل',
        'about.highlights.modern': 'تقنيات ويب حديثة',
        'about.highlights.scalable': 'حلول قابلة للتطوير',

        // Skills Section
        'skills.subtitle': 'خبراتي',
        'skills.title': 'المهارات التقنية',
        'skills.backend': 'تطوير الواجهة الخلفية',
        'skills.frontend': 'تطوير الواجهة الأمامية',
        'skills.database': 'قواعد البيانات والأدوات',


        // Portfolio Section
        'portfolio.subtitle': 'ماذا أنجزت؟',
        'portfolio.title': 'معرض الأعمال',
        'portfolio.ecommerce_platform.title': 'متجر رقمي',
        'portfolio.ecommerce_platform.desc': 'متجر إلكتروني متخصص في بيع "المنتجات الرقمية".',
        'portfolio.online-food.title': 'نظام إدارة الطعام',
        'portfolio.online-food.desc': 'تطبيق طلبات من المطاعم مع خدمة التوصيل',
        'portfolio.dashboard.title': 'لوحة تحكم مصنعة خصيصاً',
        'portfolio.dashboard.desc': 'لوحة تحكم مخصصة تم تطويرها يعكس الهيكلية الهندسية.',
        'portfolio.hrms.title': 'نظام إدارة الموارد البشرية',
        'portfolio.hrms.desc': 'نظام إدارة الموارد البشرية لمعالجة بيانات الموظفين ورواتبهم.',
        'portfolio.yemen-old.title': 'اليمن قديماً',
        'portfolio.yemen-old.desc': 'موقع يعكس التراث والحضارة اليمنية القديمة.',
        'portfolio.digital.title': '62',
        'portfolio.digital.desc': 'شركة 62 لتقديم كافة خدمات الجرافكس',
        'portfolio.portfolio.title': ' بورتفوليو محمد نصاري',
        'portfolio.portfolio.desc': 'تطبيق ويب لملف التعريف الشخصي ب محمد نصاري.',
        'portfolio.landing.title': 'Bondi',
        'portfolio.landing.desc': 'صفحة هبوط ثابتة لعرض المنتج>',
        'portfolio.pg-sms.title': 'بيانات طلاب الماجستير',
        'portfolio.pg-sms.desc': 'تطبيق لإدارة بيانات طلاب الماجستير.',

        // CTA Section
        'cta.badge': 'متاح للمشاريع',
        'cta.title': 'لنبني شيئاً مذهلاً معاً',
        'cta.description': 'أنا متاح حالياً لمشاريع العمل الحر والفرص بدوام كامل. سواء كنت بحاجة إلى تطبيق ويب كامل أو ترغب في تحسين نظامك الحالي، يمكنني المساعدة في تحويل رؤيتك إلى واقع.',
        'cta.benefit1': 'خبرة أكثر من 5 سنوات',
        'cta.benefit2': 'وقت استجابة سريع (أقل من 24 ساعة)',
        'cta.benefit3': 'جودة مضمونة',
        'cta.button1': 'تواصل معي',
        'cta.button2': 'راسلني على واتساب',
        'cta.note': 'وقت الاستجابة المعتاد: خلال 24 ساعة',
        'cta.stat1': 'مشروع مكتمل',
        'cta.stat2': 'سنوات خبرة',
        'cta.stat3': 'رضا العملاء',

        // Projects Section
        'projects.subtitle': 'ماذا بنيت؟',
        'projects.title': 'المشاريع البارزة',

        // Project 1 - Digital Products E-commerce Platform
        'project.ecommerce.title': 'منصة تجارة إلكترونية للمنتجات الرقمية',
        'project.ecommerce.category': 'تطبيق ويب متكامل (Laravel)',
        'project.ecommerce.p1': 'تصميم وتطوير منصة تجارة إلكترونية متكاملة مخصصة لبيع المنتجات الرقمية، وأكواد الألعاب، والاشتراكات باستخدام Laravel.',
        'project.ecommerce.p2': 'هندسة قاعدة بيانات MySQL قوية مع استعلامات علائقية مُحسنة لربط المخزون الرقمي بطلبات المستخدمين بسلاسة، مما يضمن تسليماً فورياً آمناً ومؤتمتاً بنسبة 100% عند تأكيد الدفع.',
        'project.ecommerce.p3': 'دمج JavaScript و Alpine.js لإدخال ميزات تفاعلية في الوقت الفعلي، مثل مرشحات البحث الفورية وتحديثات سلة التسوق الديناميكية، مما يقلل من إعادة تحميل الصفحة ويشجع تفاعل المستخدم.',

        // Project 2 - Dynamic Restaurant Management System
        'project.restaurant.title': 'نظام إدارة مطاعم ديناميكي',
        'project.restaurant.category': 'تطوير الويب المتكامل',
        'project.restaurant.p1': 'بناء تطبيق ويب ديناميكي للمطاعم يضم قائمة طعام رقمية تفاعلية وتحكماً إدارياً كاملاً.',
        'project.restaurant.p2': 'تنفيذ عمليات CRUD كاملة مدعومة بـ PHP و MySQL و Laravel، مما يتيح إدارة سلسة للمستخدمين والبيانات.',
        'project.restaurant.p3': 'الاستفادة من JavaScript و jQuery لرفع مستوى تفاعل المستخدم، وتحسين تدفق بيانات العميل والخادم، وضمان تفاعلات سلسة وخالية من الانقطاعات.',

        // Project 3 - Ancient Yemen Heritage Portal
        'project.heritage.title': 'بوابة تراث اليمن القديم',
        'project.heritage.category': 'تطوير واجهات المستخدم',
        'project.heritage.p1': 'تطوير موقع إلكتروني إعلاني تفاعلي يعرض تاريخ وثقافة اليمن القديم.',
        'project.heritage.p2': 'بنائه باستخدام HTML5 و CSS3 و JavaScript نظيفة، مع أقسام تاريخية منظمة وتصميم مرئي جذاب وسهل الوصول مصمم لتحسين القراءة وتجربة المستخدم المثلى.',

        // ducation.subtitle
        'education.subtitle': 'الخلفية الأكاديمية',
        'education.title': 'التعليم',
        'education.period': '2020 - 2024',
        'education.degree': 'بكالوريوس علوم',
        'education.major': 'تقنية المعلومات ونظم المعلومات',
        'education.university': ' جامعة الملكة أروى ,اليمن',

        // Contact Section
        'contact.subtitle': 'لنتواصل',
        'contact.title': 'تواصل معي',
        'contact.description': 'هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكنني مساعدتك في تحقيق أهدافك.',


        'contact.email': 'البريد الإلكتروني',
        'contact.responseTime': 'وقت الاستجابة: أقل من 24 ساعة',
        'contact.phone': 'الهاتف / واتساب',
        'contact.whatsapp': 'راسلني على واتساب',
        'contact.location': 'الموقع',
        'contact.locationValue': 'اليمن (العمل عن بُعد متاح)',
        'contact.social': 'تواصل عبر وسائل التواصل الاجتماعي',
        'contact.available': 'متاح لمشاريع جديدة',

        // Footer
        'footer.rights': 'حمزة المغلس'
    }
};

// Current language
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    setLanguage(currentLang);

    // Add click event to language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

// Toggle between languages
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(currentLang);
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Add/remove RTL class
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }

    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update language toggle button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.innerHTML = `<i class="ti-world"></i> ${lang === 'en' ? 'العربية' : 'English'}`;
    }

    // Add transition effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}
