const infoModal = document.querySelector('.info-modal');
const infoBtn = document.querySelector('.info-btn');
const closeInfo = document.querySelector('.close-info');

infoBtn.addEventListener('click', () => {
    infoModal.showModal();
})

closeInfo.addEventListener('click', () => {
    infoModal.close();
})

const langModal = document.querySelector('.lang-modal');
const langBtn = document.querySelector('.lang-btn');
const closeLang = document.querySelector('.close-lang');

langBtn.addEventListener('click', () => {
    langModal.showModal();
})

closeLang.addEventListener('click', () => {
    langModal.close();
})

let currentLang = localStorage.getItem('lang');

if (currentLang == null) {
    currentLang = navigator.language || navigator.userLanguage;
    if (!currentLang.startsWith('es') && !currentLang.startsWith('en'))
        currentLang = 'en';
    localStorage.setItem('lang', currentLang);
}

if (currentLang.startsWith('es') && window.location.pathname.startsWith('/en')) {
    window.location.href = '/index.html';
} else if (currentLang.startsWith('en') && !window.location.pathname.startsWith('/en')) {
    window.location.href = '/en.html';
}

const langOptions = document.querySelectorAll('.lang-option');

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        let lang = option.getAttribute('data-lang');
        localStorage.setItem('lang', lang);
    });
});