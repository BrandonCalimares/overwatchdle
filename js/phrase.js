const phraseText = document.querySelector('.game-instructions__title');
const audioPlayer = document.querySelector('.audio');
const randomPhrase = audios[Math.floor(Math.random() * audios.length)];
const results = document.querySelector('.results-phrase-container');
const audioContainer = document.querySelector('.audio-player');
const audioText = document.querySelector('.audio__text');
const audioButton = document.querySelector('.audio-button');

let tries = 0;

phraseText.innerHTML = `"${randomPhrase.text}"`;
audioPlayer.src = randomPhrase.audio;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('.chr-search__input');
    const searchValue = input.value.toLowerCase();
    input.value = '';
    searchResults.innerHTML = '';
    let hero = audios.filter(hero => hero.hero == searchValue);
    if (hero.length > 0) {
        tries++;
        showResults(hero[0]);
    }
})

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <img src="imgs/characters/' + randomPhrase.hero + '.webp" alt="' + randomPhrase.hero + '" class="correct-answer__img"> <p class="correct-answer__name">' + randomPhrase.hero + '</p> </div>';
    content += '<p class="correct-answer__tries">Numero de intentos: ' + tries + '</p>';

    container.innerHTML = content + container.innerHTML;
    container.classList.remove('correct-answer-hidden');
}

const showResults = (h) => {
    let container = document.createElement('section');

    let image = document.createElement('img');
    image.src = 'imgs/characters/' + h.hero + '.webp';
    image.alt = h.hero;
    image.classList.add('results-phrase__img');
    container.appendChild(image);

    let name = document.createElement('p');
    name.classList.add('results-phrase__name');
    name.innerHTML = h.hero;
    container.appendChild(name);

    if (h.hero == randomPhrase.hero) {
        container.classList.add('correct');

        const input = document.querySelector('.chr-search__input');
        input.disabled = true;
        setTimeout(() => {
            showCorrectAnswer();
            window.scrollTo(0, document.body.scrollHeight);
            audioText.innerHTML = 'pista de audio';
            audioContainer.style.display = 'flex';
            audioButton.classList.remove('audio-locked');
        }, 500);
    } else {
        container.classList.add('wrong');
        if (tries <= 3) {
            updateCounter();
        }
    }

    results.insertBefore(container, results.firstChild);
    container.classList.add('results-phrase');
}

const updateCounter = () => {
    let triesLeft = 3 - tries;
    switch (triesLeft) {
        case 2:
            audioText.innerHTML = 'pista de audio en 2 intentos';
            break;
        case 1:
            audioText.innerHTML = 'pista de audio en 1 intento';
            break;
        case 0:
            audioText.innerHTML = 'pista de audio';
            audioButton.classList.remove('audio-locked');
            break;
    }
}

audioButton.addEventListener('click', () => {
    if (tries >= 3) {
        audioContainer.style.display = 'flex';
    }
})

const audioPlayerButton = document.querySelector('.audio-player__button');

audioPlayerButton.addEventListener('click', () => {
    audioPlayer.play();
})

audioPlayer.addEventListener('play', () => {
    const audioPlayIcon = document.querySelector('.audio-play');
    const audioStopIcon = document.querySelector('.audio-stop');
    audioPlayIcon.style.display = 'none';
    audioStopIcon.style.display = 'block';
})

audioPlayer.addEventListener('ended', () => {
    const audioPlayIcon = document.querySelector('.audio-play');
    const audioStopIcon = document.querySelector('.audio-stop');
    audioPlayIcon.style.display = 'block';
    audioStopIcon.style.display = 'none';
})

const volumeSlider = document.querySelector('.volume-slider');

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
})