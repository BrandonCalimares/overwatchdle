const langModal = document.querySelector('.language-modal');
const langBtn = document.querySelector('.language-btn');
const closeLang = document.querySelector('.close-lang');

const infoModal = document.querySelector('.info-modal');
const infoBtn = document.querySelector('.info-btn');
const closeInfo = document.querySelector('.close-info');

/* Language modal methods */

langBtn.addEventListener('click', () => {
    langModal.showModal();
})

closeLang.addEventListener('click', () => {
    langModal.close();
})

/* Info modal methods */

infoBtn.addEventListener('click', () => {
    infoModal.showModal();
})

closeInfo.addEventListener('click', () => {
    infoModal.close();
})