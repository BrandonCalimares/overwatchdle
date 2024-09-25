const infoModal = document.querySelector('.info-modal');
const infoBtn = document.querySelector('.info-btn');
const closeInfo = document.querySelector('.close-info');

infoBtn.addEventListener('click', () => {
    infoModal.showModal();
})

closeInfo.addEventListener('click', () => {
    infoModal.close();
})