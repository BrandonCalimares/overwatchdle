const currentDate = new Date();
const randomEmojis = emojis[genDailyIndex(2, emojis, currentDate)];

const results = document.querySelector('.results-emoji-container');
const emojisText = [
    document.querySelector('.emoji-0'),
    document.querySelector('.emoji-1'),
    document.querySelector('.emoji-2'),
    document.querySelector('.emoji-3')
]

const lang = window.location.pathname.startsWith("/en") ? "en" : "es";

let tries = 0;

const prevDate = new Date(currentDate);
prevDate.setUTCDate(prevDate.getUTCDate() - 1);
const prevHero = emojis[genDailyIndex(2, emojis, prevDate)];

const prevHeroText = document.querySelector('.previousHero');
prevHeroText.innerHTML = prevHero.hero;

emojisText[0].innerHTML = randomEmojis.text[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('.chr-search__input');
    const searchValue = input.value.toLowerCase();
    input.value = '';
    searchResults.innerHTML = '';
    let hero = heroes.filter(hero => hero.name.startsWith(searchValue));
    if (hero.length > 0) {
        tries++;
        addToCookies(hero[0]);
        const index = heroes.findIndex(h => h.name == hero[0].name);
        heroes.splice(index, 1);
        showResults(hero[0]);
    }
})

const showResults = (h) => {
    let container = document.createElement('section');

    let image = document.createElement('div');
    image.classList.add('results-emoji__img', 'bg-' + h.name.toLowerCase().replaceAll(' ', '_'));
    container.appendChild(image);

    let name = document.createElement('p');
    name.classList.add('results-emoji__name');
    name.innerHTML = h.name;
    container.appendChild(name);

    if (h.name == randomEmojis.hero) {
        container.classList.add('correct');

        const input = document.querySelector('.chr-search__input');
        input.disabled = true;

        setTimeout(() => {
            addWinStreak();
            showCorrectAnswer();
            const correctAnswers = document.querySelector('.correct-answer');
            correctAnswers.scrollIntoView({ behavior: 'smooth', block: "start" });
        }, 500);
    } else {
        container.classList.add('wrong');
        if (tries < 4) {
            emojisText[tries].innerHTML = randomEmojis.text[tries];
            emojisText[tries].classList.add('emoji-animated');
        }
    }

    results.insertBefore(container, results.firstChild);
    container.classList.add('results-emoji');
}

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <div class="correct-answer__img bg-' + randomEmojis.hero.toLowerCase().replaceAll(' ', '_') + '"></div> <p class="correct-answer__name">' + randomEmojis.hero + '</p> </div>';
    if (lang == 'es')
        content += '<p class="correct-answer__tries">Número de intentos: ' + tries + '</p>';
    else
        content += '<p class="correct-answer__tries">Number of tries: ' + tries + '</p>';

    emojisText[1].innerHTML = randomEmojis.text[1];
    emojisText[2].innerHTML = randomEmojis.text[2];
    emojisText[3].innerHTML = randomEmojis.text[3];

    container.innerHTML = content + container.innerHTML;

    const share = document.querySelector('.share');
    const shareText = document.querySelector('.share-text');
    if (lang == 'es') {
        shareText.textContent = `Encontré al héroe de #Overwatchdle en el modo emoji en ${tries} intento${tries == 1 ? '' : 's'}.\n\nhttps://overwatchdle.vercel.app`;
    } else {
        shareText.textContent = `I found the #Overwatchdle hero in emoji mode in ${tries} attempt${tries == 1 ? '' : 's'}.\n\nhttps://overwatchdle.vercel.app`;
    }

    container.classList.remove('correct-answer-hidden');
    share.classList.remove('share-hidden');
}

const addToCookies = (h) => {
    let hGuessed = getCookie('heroesGuessed');
    if (hGuessed == null) {
        hGuessed = [];
    } else {
        hGuessed = JSON.parse(hGuessed);
    }
    hGuessed.push(heroes.indexOf(h));

    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /emoji`;
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /en/emoji`;
}

const loadGuessedHeroes = () => {
    let hGuessed = getCookie('heroesGuessed');
    if (hGuessed == null) hGuessed = [];
    else hGuessed = JSON.parse(hGuessed);
    tries = hGuessed.length;
    hGuessed.forEach((h, index) => {
        let container = document.createElement('section');

        let image = document.createElement('div');
        image.classList.add('results-emoji__img', 'bg-' + heroes[h].name.toLowerCase().replaceAll(' ', '_'));
        container.appendChild(image);

        let name = document.createElement('p');
        name.classList.add('results-emoji__name');
        name.innerHTML = heroes[h].name;
        container.appendChild(name);

        if (heroes[h].name == randomEmojis.hero) {
            container.classList.add('correct');

            const input = document.querySelector('.chr-search__input');
            input.disabled = true;

            showCorrectAnswer();
        } else {
            container.classList.add('wrong');
            if (index < 4) {
                emojisText[index + 1].innerHTML = randomEmojis.text[index + 1];
                emojisText[index + 1].classList.add('emoji-animated');
            }
        }

        results.insertBefore(container, results.firstChild);
        container.classList.add('results-phrase');
        heroes.splice(h, 1);
    })
}

let winStreak = localStorage.getItem('winStreakEmoji');

if (winStreak === null) {
    winStreak = [0, null];
    localStorage.setItem('winStreakEmoji', JSON.stringify(winStreak));
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
    localStorage.setItem('winStreakEmoji', JSON.stringify(winStreak));
}

addWinStreak = () => {
    winStreak[0]++;
    winStreak[1] = currentDate.toDateString();
    localStorage.setItem('winStreakEmoji', JSON.stringify(winStreak));
    const winStreakNumber = document.querySelector('.winStreak_number');
    winStreakNumber.textContent = winStreak[0];
    winStreakContainer.classList.remove('noWinStreak');
};

loadGuessedHeroes();