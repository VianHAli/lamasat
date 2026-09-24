function setLanguage(lang) {
    const htmlRoot = document.getElementById('html-root');
    
    // ضبط اتجاه الصفحة (العربية والكوردية من اليمين لليسار، الإنجليزية من اليسار لليمين)
    if (lang === 'en') {
        htmlRoot.setAttribute('dir', 'ltr');
        htmlRoot.setAttribute('lang', 'en');
    } else {
        htmlRoot.setAttribute('dir', 'rtl');
        htmlRoot.setAttribute('lang', lang);
    }

    // جلب كل النصوص وترجمتها فوراً للغة المختارة
    const elements = document.querySelectorAll('[data-' + lang + ']');
    elements.forEach(el => {
        el.textContent = el.getAttribute('data-' + lang);
    });
}