const abilityImg = document.querySelector('.ability-img');
const results = document.querySelector('.results-ability-container');

const currentDate = new Date();
const randomAbility = abilities[genDailyIndex(5, abilities, currentDate)];

const lang = window.location.pathname.startsWith("/en") ? "en" : "es";

let tries = 0;

const prevDate = new Date(currentDate);
prevDate.setUTCDate(prevDate.getUTCDate() - 1);
const prevHero = abilities[genDailyIndex(5, abilities, prevDate)];

const prevHeroText = document.querySelector('.previousHero');
prevHeroText.innerHTML = prevHero.hero;

abilityImg.style.backgroundImage = `url(/${randomAbility.img})`;
let size = 200;
abilityImg.style.backgroundSize = `${size}%`;

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

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let ggText = document.createElement('p');
    ggText.classList.add('correct-answer__text');
    ggText.innerHTML = 'GG EZ';

    let correctHero = document.createElement('div');
    correctHero.classList.add('correct-answer__hero');

    let heroImg = document.createElement('div');
    heroImg.classList.add('correct-answer__img', 'bg-' + randomAbility.hero.toLowerCase());

    let heroName = document.createElement('p');
    heroName.classList.add('correct-answer__name');
    heroName.innerHTML = randomAbility.hero;

    correctHero.appendChild(heroImg);
    correctHero.appendChild(heroName);

    let triesText = document.createElement('p');
    triesText.classList.add('correct-answer__tries');
    if (lang == 'es')
        triesText.innerHTML = 'Número de intentos: ' + tries;
    else
        triesText.innerHTML = 'Number of attempts: ' + tries;

    container.insertBefore(triesText, container.firstChild);
    container.insertBefore(correctHero, container.firstChild);
    container.insertBefore(ggText, container.firstChild);

    const share = document.querySelector('.share');
    const shareText = document.querySelector('.share-text');
    if (lang == 'es') {
        shareText.textContent = `Encontré al héroe de #Overwatchdle en el modo habilidad en ${tries} intento${tries == 1 ? '' : 's'}.\n\nhttps://overwatchdle.vercel.app`;
    } else {
        shareText.textContent = `I found the #Overwatchdle hero in ability mode in ${tries} attempt${tries == 1 ? '' : 's'}.\n\nhttps://overwatchdle.vercel.app`;
    }

    container.classList.remove('correct-answer-hidden');
    share.classList.remove('share-hidden');
}

const showResults = (h) => {
    let container = document.createElement('section');

    let image = document.createElement('div');
    image.classList.add('results-ability__img', 'bg-' + h.name.toLowerCase());
    container.appendChild(image);

    let name = document.createElement('p');
    name.classList.add('results-ability__name');
    name.innerHTML = h.name;
    container.appendChild(name);

    if (h.name == randomAbility.hero) {
        abilityImg.style.backgroundSize = `80%`;

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
        if (size > 80) {
            size -= 20;
            abilityImg.style.backgroundSize = `${size}%`;
        }
        container.classList.add('wrong');
    }

    results.insertBefore(container, results.firstChild);
    container.classList.add('results-ability');
}

const rightClickButton = document.querySelector('.right-click');
const qButton = document.querySelector('.q');
const eButton = document.querySelector('.e');
const shiftButton = document.querySelector('.shift');

rightClickButton.addEventListener('click', () => {
    verifyExtra('right-click', rightClickButton);
})

qButton.addEventListener('click', () => {
    verifyExtra('q', qButton);
})

eButton.addEventListener('click', () => {
    verifyExtra('e', eButton);
})

shiftButton.addEventListener('click', () => {
    verifyExtra('shift', shiftButton);
})

const verifyExtra = (option, button) => {
    switch (randomAbility.key) {
        case 'right-click':
            rightClickButton.classList.add('ability-option-correct');
            break;
        case 'q':
            qButton.classList.add('ability-option-correct');
            break;
        case 'e':
            eButton.classList.add('ability-option-correct');
            break;
        case 'shift':
            shiftButton.classList.add('ability-option-correct');
    }

    if (randomAbility.key != option) {
        button.classList.add('ability-option-wrong');
    }

    rightClickButton.disabled = true;
    rightClickButton.classList.add('no-hover');
    qButton.disabled = true;
    qButton.classList.add('no-hover');
    eButton.disabled = true;
    eButton.classList.add('no-hover');
    shiftButton.disabled = true;
    shiftButton.classList.add('no-hover');
}

const addToCookies = (h) => {
    if (document.cookie == '') {
        document.cookie = `heroesGuessed = []; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /ability`;
        document.cookie = `heroesGuessed = []; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /en/ability`;
    }
    const cookies = document.cookie;
    const hGuessed = JSON.parse(cookies.split('=')[1]);
    hGuessed.push(heroes.indexOf(h));
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /ability`;
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /en/ability`;
}

const getFromCookies = () => {
    const cookies = document.cookie;
    if (cookies == '') {
        return [];
    }
    return JSON.parse(cookies.split('=')[1]);
}

const loadGuessedHeroes = () => {
    const hGuessed = getFromCookies();
    tries = hGuessed.length;
    hGuessed.forEach(h => {
        let container = document.createElement('section');

        let image = document.createElement('div');
        image.classList.add('results-ability__img', 'bg-' + heroes[h].name.toLowerCase());
        container.appendChild(image);

        let name = document.createElement('p');
        name.classList.add('results-phrase__name');
        name.innerHTML = heroes[h].name;
        container.appendChild(name);

        if (heroes[h].name == randomAbility.hero) {
            abilityImg.style.backgroundSize = `80%`;

            container.classList.add('correct');

            const input = document.querySelector('.chr-search__input');
            input.disabled = true;
            showCorrectAnswer();
        } else {
            if (size > 80) {
                size -= 20;
                abilityImg.style.backgroundSize = `${size}%`;
            }
            container.classList.add('wrong');
        }

        results.insertBefore(container, results.firstChild);
        container.classList.add('results-phrase', 'non-animated');
        heroes.splice(h, 1);
    });
}

let winStreak = localStorage.getItem('winStreakAbility');

if (winStreak === null) {
    winStreak = [0, null];
    localStorage.setItem('winStreakAbility', JSON.stringify(winStreak));
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
    localStorage.setItem('winStreakAbility', JSON.stringify(winStreak));
}

addWinStreak = () => {
    winStreak[0]++;
    winStreak[1] = currentDate.toDateString();
    localStorage.setItem('winStreakAbility', JSON.stringify(winStreak));
    const winStreakNumber = document.querySelector('.winStreak_number');
    winStreakNumber.textContent = winStreak[0];
    winStreakContainer.classList.remove('noWinStreak');
};

loadGuessedHeroes();