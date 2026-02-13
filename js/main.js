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

const shareText = document.querySelector('.share-text');

const copyText = () => {
    navigator.clipboard.writeText(shareText.textContent).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const copyBtnText = copyBtn.querySelector('.share-btn__text');
        copyBtnText.innerHTML = currentLang.startsWith('es') ? 'Copiado' : 'Copied';
        copyBtn.classList.add('copied');

    }).catch(err => {
        alert('Error: ' + err);
    });
}

const shareTwitter = () => {
    const text = shareText.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
};

const genDailyIndex = (offset, array, date) => {
    const seed = date.getUTCFullYear() * 10000 + (date.getUTCMonth() + offset) * 100 + date.getUTCDate();
    const randomSin = Math.sin(seed) * 10000;
    const randomNormalized = randomSin - Math.floor(randomSin);
    const index = Math.floor(randomNormalized * array.length);
    return index;
};