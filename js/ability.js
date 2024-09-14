const abilityImg = document.querySelector('.ability-img');
const results = document.querySelector('.results-ability-container');

const currentDate = new Date();
if (((currentDate.getUTCFullYear() * (currentDate.getUTCMonth() + 1)) % abilities.length) == 0) currentDate.setFullYear(currentDate.getUTCFullYear() + 1)
const index = (currentDate.getUTCFullYear() * currentDate.getUTCDate() * (currentDate.getUTCMonth() + 1)) % abilities.length
const randomAbility = abilities[index];

let tries = 0;

abilityImg.style.backgroundImage = `url(${randomAbility.img})`;
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

    let heroImg = document.createElement('img');
    heroImg.src = 'imgs/characters/' + randomAbility.hero + '.webp';
    heroImg.alt = randomAbility.hero;
    heroImg.classList.add('correct-answer__img');

    let heroName = document.createElement('p');
    heroName.classList.add('correct-answer__name');
    heroName.innerHTML = randomAbility.hero;

    correctHero.appendChild(heroImg);
    correctHero.appendChild(heroName);

    let triesText = document.createElement('p');
    triesText.classList.add('correct-answer__tries');
    triesText.innerHTML = 'Numero de intentos: ' + tries;

    container.insertBefore(triesText, container.firstChild);
    container.insertBefore(correctHero, container.firstChild);
    container.insertBefore(ggText, container.firstChild);

    container.classList.remove('correct-answer-hidden');
}

const showResults = (h) => {
    let container = document.createElement('section');

    let image = document.createElement('img');
    image.src = 'imgs/characters/' + h.name + '.webp';
    image.alt = h.name;
    image.classList.add('results-phrase__img');
    container.appendChild(image);

    let name = document.createElement('p');
    name.classList.add('results-phrase__name');
    name.innerHTML = h.name;
    container.appendChild(name);

    if (h.name == randomAbility.hero) {
        abilityImg.style.backgroundSize = `80%`;

        container.classList.add('correct');

        const input = document.querySelector('.chr-search__input');
        input.disabled = true;

        setTimeout(() => {
            showCorrectAnswer();
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);
    } else {
        if (size > 80) {
            size -= 20;
            abilityImg.style.backgroundSize = `${size}%`;
        }
        container.classList.add('wrong');
    }

    results.insertBefore(container, results.firstChild);
    container.classList.add('results-phrase');
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
        document.cookie = `heroesGuessed = []; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /ability.html`;
    }
    const cookies = document.cookie;
    const hGuessed = JSON.parse(cookies.split('=')[1]);
    hGuessed.push(heroes.indexOf(h));
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /ability.html`;
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

        let image = document.createElement('img');
        image.src = 'imgs/characters/' + heroes[h].name + '.webp';
        image.alt = heroes[h].name;
        image.classList.add('results-phrase__img');
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

loadGuessedHeroes();