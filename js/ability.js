const abilityImg = document.querySelector('.ability-img');
const results = document.querySelector('.results-phrase-container');
const randomAbility = abilities[Math.floor(Math.random() * abilities.length)];
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
    let hero = abilities.filter(hero => hero.hero.startsWith(searchValue));
    if (hero.length > 0) {
        tries++;
        showResults(hero[0]);
    }
})

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <img src="imgs/characters/' + randomAbility.hero + '.webp" alt="' + randomAbility.hero + '" class="correct-answer__img"> <p class="correct-answer__name">' + randomAbility.hero + '</p> </div>';
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

    if (h.hero == randomAbility.hero) {
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
