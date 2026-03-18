const phraseText = document.querySelector('.game-instructions__title');
const audioPlayer = document.querySelector('.audio');

const currentDate = new Date();
const randomPhrase = audios[genDailyIndex(3, audios, currentDate)];

const results = document.querySelector('.results-phrase-container');
const audioContainer = document.querySelector('.audio-player');
const audioText = document.querySelector('.audio__text');
const audioButton = document.querySelector('.audio-button');

const lang = window.location.pathname.startsWith("/en") ? "en" : "es";

let tries = 0;

const prevDate = new Date(currentDate);
prevDate.setUTCDate(prevDate.getUTCDate() - 1);
const prevHero = audios[genDailyIndex(3, audios, prevDate)];

const prevHeroText = document.querySelector('.previousHero');
prevHeroText.innerHTML = prevHero.hero;

phraseText.innerHTML = `"${randomPhrase.text[lang]}"`;
audioPlayer.src = `/${randomPhrase.audio[lang]}`;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('.chr-search__input');
    const searchValue = input.value.toLowerCase();
    input.value = '';
    searchResults.innerHTML = '';
    if (searchValue.length == 0) return;
    let hero = heroes.filter(hero => hero.name.startsWith(searchValue));
    if (hero.length > 0) {
        tries++;
        addToCookies(hero[0]);
        const index = heroes.findIndex(h => h.name == hero[0].name);
        heroes.splice(index, 1);
        showResults(hero[0]);
    }
})

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <div class="correct-answer__img bg-' + randomPhrase.hero.toLowerCase().replaceAll(' ', '_') + '"></div> <p class="correct-answer__name">' + randomPhrase.hero + '</p> </div>';
    if (lang == 'es')
        content += '<p class="correct-answer__tries">Numero de intentos: ' + tries + '</p>';
    else
        content += '<p class="correct-answer__tries">Number of attempts: ' + tries + '</p>';
    container.innerHTML = content + container.innerHTML;

    const share = document.querySelector('.share');
    const shareText = document.querySelector('.share-text');
    if (lang == 'es') {
        shareText.textContent = `Encontré al héroe de #Overwatchdle en el modo frase en ${tries} intento${tries == 1 ? '' : 's'}.\n\nhttps://overwatchdle.vercel.app`;
    } else {
        shareText.textContent = `I found the #Overwatchdle hero in phrase mode in ${tries} attempt${tries == 1 ? '' : 's'}.\n\nhttps://overwatchdle.vercel.app`;
    }
    container.classList.remove('correct-answer-hidden');
    share.classList.remove('share-hidden');
}

const showResults = (h) => {
    let container = document.createElement('section');

    let image = document.createElement('div');
    image.classList.add('results-phrase__img', 'bg-' + h.name.toLowerCase().replaceAll(' ', '_'));
    container.appendChild(image);

    let name = document.createElement('p');
    name.classList.add('results-phrase__name');
    name.innerHTML = h.name;
    container.appendChild(name);

    if (h.name == randomPhrase.hero) {
        container.classList.add('correct');

        const input = document.querySelector('.chr-search__input');
        input.disabled = true;
        setTimeout(() => {
            addWinStreak();
            showCorrectAnswer();
            const correctAnswers = document.querySelector('.correct-answer');
            correctAnswers.scrollIntoView({ behavior: 'smooth', block: "start" });
            if (lang == 'es')
                audioText.innerHTML = 'pista de audio';
            else
                audioText.innerHTML = 'audio hint';
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
            if (lang == 'es')
                audioText.innerHTML = 'pista de audio en 2 intentos';
            else
                audioText.innerHTML = 'audio hint in 2 attempts';
            break;
        case 1:
            if (lang == 'es')
                audioText.innerHTML = 'pista de audio en 1 intento';
            else
                audioText.innerHTML = 'audio hint in 1 attempt';
            break;
        case 0:
            if (lang == 'es')
                audioText.innerHTML = 'pista de audio';
            else
                audioText.innerHTML = 'audio hint';
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
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

})

audioPlayer.addEventListener('play', () => {
    const audioPlayIcon = document.querySelector('.audio-play');
    const audioStopIcon = document.querySelector('.audio-stop');
    audioPlayIcon.style.display = 'none';
    audioStopIcon.style.display = 'block';
})

audioPlayer.addEventListener('pause', () => {
    const audioPlayIcon = document.querySelector('.audio-play');
    const audioStopIcon = document.querySelector('.audio-stop');
    audioPlayIcon.style.display = 'block';
    audioStopIcon.style.display = 'none';
})

const volumeSlider = document.querySelector('.volume-slider');

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value / 100;
})

const addToCookies = (h) => {
    let hGuessed = getCookie('heroesGuessed');
    if (hGuessed == null) {
        hGuessed = [];
    } else {
        hGuessed = JSON.parse(hGuessed);
    }
    hGuessed.push(heroes.indexOf(h));

    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /phrase`;
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /en/phrase`;
}

const loadGuessedHeroes = () => {
    let hGuessed = getCookie('heroesGuessed');
    if (hGuessed == null) hGuessed = [];
    else hGuessed = JSON.parse(hGuessed);
    tries = hGuessed.length;
    hGuessed.forEach(h => {
        let container = document.createElement('section');

        let image = document.createElement('div');
        image.classList.add('results-phrase__img', 'bg-' + heroes[h].name.toLowerCase().replaceAll(' ', '_'));
        container.appendChild(image);

        let name = document.createElement('p');
        name.classList.add('results-phrase__name');
        name.innerHTML = heroes[h].name;
        container.appendChild(name);

        if (heroes[h].name == randomPhrase.hero) {
            container.classList.add('correct');

            const input = document.querySelector('.chr-search__input');
            input.disabled = true;
            showCorrectAnswer();
            if (lang == 'es')
                audioText.innerHTML = 'pista de audio';
            else
                audioText.innerHTML = 'audio hint';
            audioContainer.style.display = 'flex';
            audioButton.classList.remove('audio-locked');
        } else {
            container.classList.add('wrong');
            if (tries <= 3) {
                updateCounter();
            }
        }

        results.insertBefore(container, results.firstChild);
        container.classList.add('results-phrase', 'non-animated');
        heroes.splice(h, 1);
    })
}

let winStreak = localStorage.getItem('winStreakPhrase');

if (winStreak === null) {
    winStreak = [0, null];
    localStorage.setItem('winStreakPhrase', JSON.stringify(winStreak));
} else {
    winStreak = JSON.parse(winStreak);
}

const winStreakNumber = document.querySelector('.winStreak_number');
const winStreakContainer = document.querySelector('.winStreak_container');
if (winStreak[1] == prevDate.toDateString() || winStreak[1] == currentDate.toDateString()) {
    winStreakNumber.textContent = winStreak[0];
    winStreakContainer.classList.remove('noWinStreak');
} else {
    winStreakContainer.classList.add('noWinStreak');
    winStreak[0] = 0;
    winStreak[1] = null;
    winStreakNumber.textContent = winStreak[0];
    localStorage.setItem('winStreakPhrase', JSON.stringify(winStreak));
}

addWinStreak = () => {
    winStreak[0]++;
    winStreak[1] = currentDate.toDateString();
    localStorage.setItem('winStreakPhrase', JSON.stringify(winStreak));
    const winStreakNumber = document.querySelector('.winStreak_number');
    winStreakNumber.textContent = winStreak[0];
    winStreakContainer.classList.remove('noWinStreak');
};

loadGuessedHeroes();