// ── Language Data ──────────────────────────────────────────────
const translations = {
    ar: {
        badge: 'متاح للمشاريع',
        name: 'محمود <span class="highlight">المادح</span>',
        title: 'مطور واجهات ومصمم مشاريع تقنية',
        section: 'المشاريع',
        filters: ['الكل', 'ويب', 'موبايل'],
        projects: [
            {
                name: 'موقع البروفايل الشخصي',
                short: 'هذا الموقع الذي تتصفحه الآن؛ واجهة رقمية تعرض أعمالي.',
                long: 'تم بناء هذا الموقع باستخدام HTML, CSS, و JavaScript. يركز على سرعة التصفح ودعم اللغتين العربية والإنجليزية بشكل سلس.',
            },
            {
                name: 'متجر تطبيق موبايل',
                short: 'مشروع مستقبلي لمتجر إلكتروني متكامل.',
                long: 'قيد التطوير: يهدف المشروع لبناء منصة تسوق سهلة الاستخدام تركز على تجربة مستخدم الموبايل (Coming Soon).',
            },
        ],
        btn: 'English',
        footer: '© 2025 Mahmood Almadeh',
    },
    en: {
        badge: 'Available for projects',
        name: 'Mahmood <span class="highlight">Almadeh</span>',
        title: 'Frontend Developer & Project Designer',
        section: 'Projects',
        filters: ['All', 'Web', 'Mobile'],
        projects: [
            {
                name: 'Personal Portfolio Site',
                short: 'The website you are currently browsing — a digital showcase.',
                long: 'Built with HTML, CSS, and JavaScript, focusing on performance and dual-language support.',
            },
            {
                name: 'Mobile Store App',
                short: 'A future project for a comprehensive e-commerce store.',
                long: 'Under development: Aiming to build a user-friendly shopping platform for mobile users.',
            },
        ],
        btn: 'العربية',
        footer: '© 2025 Mahmood Almadeh',
    },
};

// ── State ──────────────────────────────────────────────────────
let currentLang = 'en';
let activeFilter = 'all';

// ── Toggle card open/close ─────────────────────────────────────
function toggleProject(card) {
    document.querySelectorAll('.project-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
}

// ── Filter ─────────────────────────────────────────────────────
function applyFilter(filter) {
    activeFilter = filter;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    document.querySelectorAll('.project-card').forEach(card => {
        const type = card.dataset.type;
        const visible = filter === 'all' || type === filter;
        card.classList.toggle('hidden', !visible);
        if (!visible) card.classList.remove('active');
    });
}

// ── Language toggle ────────────────────────────────────────────
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';

    const html = document.getElementById('html-tag');
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    const t = translations[currentLang];

    document.getElementById('hero-badge').textContent = t.badge;
    document.getElementById('hero-name').innerHTML = t.name;
    document.getElementById('hero-title').textContent = t.title;
    document.getElementById('section-title').textContent = t.section;
    document.getElementById('lang-btn').textContent = t.btn;
    document.getElementById('footer-text').textContent = t.footer;

    // Update filter button labels
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn, i) => {
        btn.textContent = t.filters[i];
    });

    // Update project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        const p = t.projects[i];
        if (!p) return;
        card.querySelector('.card-name').textContent = p.name;
        card.querySelector('.card-short').textContent = p.short;
        card.querySelector('.card-long').textContent = p.long;
    });
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });
});