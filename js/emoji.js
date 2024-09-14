const currentDate = new Date();
if (((currentDate.getUTCFullYear() * (currentDate.getUTCMonth() + 1)) % emojis.length) == 0) currentDate.setFullYear(currentDate.getUTCFullYear() + 1)
const index = (currentDate.getUTCFullYear() * (currentDate.getUTCDate() + 1) * (currentDate.getUTCMonth() + 2)) % emojis.length
const randomEmojis = emojis[index];

const results = document.querySelector('.results-emoji-container');
const emojisText = [
    document.querySelector('.emoji-0'),
    document.querySelector('.emoji-1'),
    document.querySelector('.emoji-2'),
    document.querySelector('.emoji-3')
]
let tries = 0;

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

    let image = document.createElement('img');
    image.src = 'imgs/characters/' + h.name + '.webp';
    image.alt = h.name;
    image.classList.add('results-phrase__img');
    container.appendChild(image);

    let name = document.createElement('p');
    name.classList.add('results-phrase__name');
    name.innerHTML = h.name;
    container.appendChild(name);

    if (h.name == randomEmojis.hero) {
        container.classList.add('correct');

        const input = document.querySelector('.chr-search__input');
        input.disabled = true;

        setTimeout(() => {
            showCorrectAnswer();
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);
    } else {
        container.classList.add('wrong');
        if (tries < 4) {
            emojisText[tries].innerHTML = randomEmojis.text[tries];
            emojisText[tries].classList.add('emoji-animated');
        }
    }

    results.insertBefore(container, results.firstChild);
    container.classList.add('results-phrase');
}

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <img src="imgs/characters/' + randomEmojis.hero + '.webp" alt="' + randomEmojis.hero + '" class="correct-answer__img"> <p class="correct-answer__name">' + randomEmojis.hero + '</p> </div>';
    content += '<p class="correct-answer__tries">Numero de intentos: ' + tries + '</p>';

    emojisText[1].innerHTML = randomEmojis.text[1];
    emojisText[2].innerHTML = randomEmojis.text[2];
    emojisText[3].innerHTML = randomEmojis.text[3];

    container.innerHTML = content + container.innerHTML;
    container.classList.remove('correct-answer-hidden');
}

const addToCookies = (h) => {
    if (document.cookie == '') {
        document.cookie = `heroesGuessed = []; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /emoji.html`;
    }
    const cookies = document.cookie;
    const hGuessed = JSON.parse(cookies.split('=')[1]);
    hGuessed.push(heroes.indexOf(h));
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /emoji.html`;
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

        if (heroes[h].name == randomEmojis.hero) {
            container.classList.add('correct');

            const input = document.querySelector('.chr-search__input');
            input.disabled = true;

            showCorrectAnswer();
        } else {
            container.classList.add('wrong');
            if (tries < 4) {
                emojisText[tries].innerHTML = randomEmojis.text[tries];
                emojisText[tries].classList.add('emoji-animated');
            }
        }

        results.insertBefore(container, results.firstChild);
        container.classList.add('results-phrase');
        heroes.splice(h, 1);
    })
}

loadGuessedHeroes();