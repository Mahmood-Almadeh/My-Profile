function toggleProject(card) {
    card.classList.toggle('active');
}

const data = {
    ar: {
        name: "محمود عبدالرضا المادح",
        title: "مطور واجهات ومصمم مشاريع تقنية",
        section: "مشاريعي المختارة",
        p1n: "موقع البروفايل الشخصي",
        p1s: "هذا الموقع الذي تتصفحه الآن؛ واجهة رقمية تعرض أعمالي.",
        p1l: "تم بناء هذا الموقع باستخدام HTML, CSS, و JavaScript. يركز على سرعة التصفح ودعم اللغتين العربية والإنجليزية بشكل سلس.",
        p2n: "متجر تطبيق موبايل",
        p2s: "مشروع مستقبلي لمتجر إلكتروني متكامل.",
        p2l: "قيد التطوير: يهدف المشروع لبناء منصة تسوق سهلة الاستخدام تركز على تجربة مستخدم الموبايل (Coming Soon).",
        btn: "English"
    },
    en: {
        name: "Mahmood A.Redha Almadeh",
        title: "Frontend Developer & Project Designer",
        section: "Selected Projects",
        p1n: "Personal Portfolio Site",
        p1s: "The website you are currently browsing; a digital showcase.",
        p1l: "Built with HTML, CSS, and JS, focusing on performance and dual-language support.",
        p2n: "Mobile Store App",
        p2s: "A future project for a comprehensive e-commerce store.",
        p2l: "Under development: Aiming to build a user-friendly shopping platform for mobile users.",
        btn: "العربية"
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const html = document.getElementById('html-tag');
    const t = data[currentLang];

    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    document.getElementById('hero-name').innerText = t.name;
    document.getElementById('hero-title').innerText = t.title;
    document.getElementById('section-title').innerText = t.section;
    document.getElementById('p1-name').innerText = t.p1n;
    document.getElementById('p1-short').innerText = t.p1s;
    document.getElementById('p1-long').innerText = t.p1l;
    document.getElementById('p2-name').innerText = t.p2n;
    document.getElementById('p2-short').innerText = t.p2s;
    document.getElementById('p2-long').innerText = t.p2l;
    document.getElementById('lang-btn').innerText = t.btn;
}