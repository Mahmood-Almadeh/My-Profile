const translations = {
    en: {
        badge: 'Available for Jobs',
        name: 'Mahmood <span class="highlight">Almadeh</span>',
        title: 'Mobile App Developer & Frontend Designer',
        summary: 'A Computer Science graduate from the University of Bahrain, focused on cross-platform mobile development using Flutter and Ionic, with hands-on Firebase backend experience.',
        aboutLabel: 'About',
        eduLabel: 'Education',
        eduVal: 'B.Sc. Computer Science — University of Bahrain',
        locationLabel: 'Location',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        section: 'Projects',
        skillsLabel: 'Skills',
        filters: ['All', 'Web', 'Mobile'],
        sk1: 'Mobile Development',
        sk2: 'Backend & Cloud',
        sk3: 'Web',
        sk4: 'Languages & Tools',
        projects: [
            { tag: 'Web', name: 'Personal Portfolio Site', short: "The website you're browsing now — a digital showcase of my work.", long: 'Built with HTML, CSS, and JavaScript. Focuses on performance and seamless bilingual (AR/EN) support.' },
            { tag: 'Mobile · Coming Soon', name: 'Mobile Shop App', short: 'A full e-commerce mobile store with a smooth shopping experience.', long: 'Under development: A user-friendly shopping platform for mobile users, featuring product listings, cart, checkout, and Firebase backend.' },
            { tag: 'Mobile · Univ. Project', name: 'Online Library System', short: 'Cross-platform library app with three user roles: Users, Staff, and Admin.', long: 'Features book searching, borrowing system, and ratings. Includes a staff dashboard for inventory and an admin panel for managing personnel.' },
            { tag: 'Mobile · Senior Project', name: 'Clubs System for School', short: 'Comprehensive club management for students, admins, and external experts.', long: 'Includes club creation requests, event facility reservations, in-app chat, event evaluations, and an admin approval workflow.' },
            { tag: 'Mobile · Training', name: 'Trivia Game', short: 'Multi-mode trivia game with social features and in-app purchases.', long: 'Three game modes (Levels, Endless, Custom), rank boards, achievements, friends system, and Google Authentication.' },
        ],
        btn: 'العربية',
        footer: '© 2025 Mahmood Almadeh',
    },

    ar: {
        badge: 'متاح للعمل',
        name: 'محمود <span class="highlight">المادح</span>',
        title: 'مطور تطبيقات موبايل ومصمم واجهات',
        summary: 'خريج علوم حاسوب من جامعة البحرين، متخصص في تطوير تطبيقات الجوال عبر المنصات باستخدام Flutter وIonic، مع خبرة عملية في Firebase.',
        aboutLabel: 'عن المطور',
        eduLabel: 'التعليم',
        eduVal: 'بكالوريوس علوم حاسوب — جامعة البحرين',
        locationLabel: 'الموقع',
        phoneLabel: 'الهاتف',
        emailLabel: 'البريد الإلكتروني',
        section: 'المشاريع',
        skillsLabel: 'المهارات',
        filters: ['الكل', 'ويب', 'موبايل'],
        sk1: 'تطوير الجوال',
        sk2: 'الخادم والسحابة',
        sk3: 'ويب',
        sk4: 'لغات وأدوات',
        projects: [
            { tag: 'ويب', name: 'موقع البروفايل الشخصي', short: 'هذا الموقع الذي تتصفحه الآن؛ واجهة رقمية تعرض أعمالي.', long: 'تم بناؤه بـ HTML وCSS وJavaScript، يركز على الأداء ودعم اللغتين بشكل سلس.' },
            { tag: 'موبايل · قريباً', name: 'تطبيق متجر الجوال', short: 'متجر إلكتروني متكامل بتجربة تسوق سلسة.', long: 'قيد التطوير: منصة تسوق سهلة الاستخدام للموبايل تشمل المنتجات، السلة، الدفع، وخلفية Firebase.' },
            { tag: 'موبايل · مشروع جامعي', name: 'نظام المكتبة الإلكترونية', short: 'تطبيق مكتبة متعدد المنصات بثلاثة أدوار: مستخدم، موظف، مدير.', long: 'يتضمن البحث عن الكتب، نظام الاستعارة، والتقييمات. ولوحة تحكم للموظفين والمدراء.' },
            { tag: 'موبايل · مشروع التخرج', name: 'نظام النوادي المدرسية', short: 'إدارة شاملة للنوادي للطلاب والمدراء والخبراء الخارجيين.', long: 'يشمل طلبات إنشاء النوادي، حجز المرافق، الدردشة، تقييم الفعاليات، وسير عمل الموافقة.' },
            { tag: 'موبايل · مشروع تدريبي', name: 'لعبة الأسئلة الثقافية', short: 'لعبة أسئلة متعددة الأوضاع مع ميزات اجتماعية وشراء داخل التطبيق.', long: 'ثلاثة أوضاع للعب (مستويات، لا نهائي، مخصص)، لوح الترتيب، الإنجازات، نظام الأصدقاء، وGoogle Auth.' },
        ],
        btn: 'English',
        footer: '© 2025 محمود المادح',
    },
};

let currentLang = 'en';
let activeFilter = 'all';

function toggleProject(card) {
    document.querySelectorAll('.project-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
}

function applyFilter(filter) {
    activeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    document.querySelectorAll('.project-card').forEach(card => {
        const visible = filter === 'all' || card.dataset.type === filter;
        card.classList.toggle('hidden', !visible);
        if (!visible) card.classList.remove('active');
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    const html = document.getElementById('html-tag');
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    const grad = currentLang === 'ar'
        ? 'linear-gradient(260deg, var(--bg-top) 0%, var(--bg-bottom) 100%)'
        : 'linear-gradient(150deg, var(--bg-top) 0%, var(--bg-bottom) 100%)';
    document.body.style.background = grad;
    document.body.style.backgroundAttachment = 'fixed';

    const t = translations[currentLang];

    document.getElementById('hero-badge').textContent = t.badge;
    document.getElementById('hero-name').innerHTML = t.name;
    document.getElementById('hero-title').textContent = t.title;
    document.getElementById('hero-summary').textContent = t.summary;
    document.getElementById('lang-btn').textContent = t.btn;

    document.getElementById('about-label').textContent = t.aboutLabel;
    document.getElementById('about-edu-label').textContent = t.eduLabel;
    document.getElementById('about-edu-val').textContent = t.eduVal;
    document.getElementById('about-location-label').textContent = t.locationLabel;
    document.getElementById('about-phone-label').textContent = t.phoneLabel;
    document.getElementById('about-email-label').textContent = t.emailLabel;

    document.getElementById('section-title').textContent = t.section;

    document.querySelectorAll('.filter-btn').forEach((btn, i) => {
        btn.textContent = t.filters[i];
    });

    document.querySelectorAll('.project-card').forEach((card, i) => {
        const p = t.projects[i];
        if (!p) return;
        card.querySelector('.card-tag').textContent = p.tag;
        card.querySelector('.card-name').textContent = p.name;
        card.querySelector('.card-short').textContent = p.short;
        card.querySelector('.card-long').textContent = p.long;
    });

    document.getElementById('skills-label').textContent = t.skillsLabel;
    document.getElementById('sk1-title').textContent = t.sk1;
    document.getElementById('sk2-title').textContent = t.sk2;
    document.getElementById('sk3-title').textContent = t.sk3;
    document.getElementById('sk4-title').textContent = t.sk4;

    document.getElementById('footer-text').textContent = t.footer;

    applyFilter(activeFilter);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });
});