const results = document.querySelector('.results-content');
const lang = window.location.pathname.startsWith("/en") ? "en" : "es";
const maxLifes = 5;

let randomId = localStorage.getItem('randomId');
if (randomId == null || randomId == -1) randomId = Math.floor(Math.random() * heroes.length);
localStorage.setItem('randomId', randomId);
let randomHeroe = heroes[randomId];

let lifes = localStorage.getItem('lifes');
if (lifes == null) lifes = maxLifes;
localStorage.setItem('lifes', lifes);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('.chr-search__input');
    const searchValue = input.value.toLowerCase();
    input.value = '';
    searchResults.innerHTML = '';
    if (searchValue.length == 0) return;
    let hero = heroes.filter(hero => hero.name.startsWith(searchValue));
    if (hero.length > 0) {
        addToLocalStorage(hero[0]);
        const index = heroes.findIndex(h => h.name == hero[0].name);
        heroes[index] = null;
        heroes.splice(index, 1);
        showResults(hero[0]);
    }
})

const addToLocalStorage = (h) => {
    let hGuessed = localStorage.getItem('hGuessedInfinite');
    if (hGuessed == null) {
        hGuessed = [];
    } else {
        hGuessed = JSON.parse(hGuessed);
    }
    hGuessed.push(heroes.indexOf(h));

    localStorage.setItem('hGuessedInfinite', JSON.stringify(hGuessed));
}

const gameLost = () => {
    const input = document.querySelector('.chr-search__input');
    input.disabled = true;
    localStorage.setItem('lifes', maxLifes);
    localStorage.setItem('hGuessedInfinite', JSON.stringify([]));
    localStorage.setItem('randomId', -1);

    const gameLostContainer = document.querySelector('.game-lost');
    let content;
    if (lang == 'es') {
        content = '<p class="correct-answer__text">El héroe era:</p>';
    } else {
        content = '<p class="correct-answer__text">The hero was:</p>';
    }
    content += '<div class="correct-answer__hero"> <div class="correct-answer__img bg-' + randomHeroe.name.toLowerCase().replaceAll(' ', '_') + '"></div> <p class="correct-answer__name">' + randomHeroe.name + '</p> </div>';
    gameLostContainer.innerHTML = content + gameLostContainer.innerHTML;

    const shareText = document.querySelector('.share-text');
    if (lang == 'es') {
        shareText.textContent = `Adivine ${winStreak} héroes en el modo infinito de #Overwatchdle.\n\nhttps://overwatchdle.tech`;
    } else {
        shareText.textContent = `I guessed ${winStreak} heroes in the infinite mode of #Overwatchdle.\n\nhttps://overwatchdle.tech`;
    }
    resetWinStreak();
    const shareContainer = document.querySelector('.share');

    setTimeout(() => {
        gameLostContainer.classList.remove('game-lost-hidden');
        shareContainer.classList.remove('share-hidden');
        gameLostContainer.scrollIntoView({ behavior: 'smooth', block: "start" });
    }, 1000);
}

const verifyResults = (h, skipLifes = false) => {
    if (h.name == randomHeroe.name) {
        return ["correct", "correct", "correct", "correct", "correct", "correct", "correct", "correct"];
    }

    let correctAnswers = ["wrong", "wrong", "wrong", "wrong", "wrong", "wrong", "wrong", "wrong"];
    if (h.gender.es == randomHeroe.gender.es) correctAnswers[0] = "correct";
    if (h.role.es == randomHeroe.role.es) correctAnswers[1] = "correct";
    if (h.subRole.es == randomHeroe.subRole.es) correctAnswers[2] = "correct";
    if (h.species.es == randomHeroe.species.es) correctAnswers[3] = "correct";
    if (h.origin.es == randomHeroe.origin.es) correctAnswers[4] = "correct";
    if (h.age > randomHeroe.age) correctAnswers[5] = "lower";
    else if (h.age < randomHeroe.age) correctAnswers[5] = "higher";
    else correctAnswers[5] = "correct";
    if (h.year > randomHeroe.year) correctAnswers[6] = "lower";
    else if (h.year < randomHeroe.year) correctAnswers[6] = "higher";
    else correctAnswers[6] = "correct";

    if (!skipLifes) {
        lifes--;
        setTimeout(() => {
            updateLifes();
        }, 600);
        if (lifes <= 0) {
            gameLost();
            return correctAnswers;
        }
        localStorage.setItem('lifes', lifes);
    }

    return correctAnswers;
}

const updateLifes = () => {
    for (let i = maxLifes; i > lifes; i--) {
        const heart = document.querySelector('#life-' + i);
        heart.classList.add('heart-lost');
        if (i == lifes + 1) {
            heart.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(1.4)' },
                { transform: 'scale(1)' }
            ], {
                duration: 500,
                easing: 'ease-in-out'
            });
        }
    }
}

const showResults = (h) => {
    let answers = verifyResults(h);

    if (JSON.stringify(answers) == JSON.stringify(["correct", "correct", "correct", "correct", "correct", "correct", "correct", "correct"])) {
        const input = document.querySelector('.chr-search__input');
        input.disabled = true;
        localStorage.setItem('lifes', maxLifes);
        localStorage.setItem('hGuessedInfinite', JSON.stringify([]));
        localStorage.setItem('randomId', -1);
        setTimeout(() => {
            addWinStreak();
            showCorrectAnswer();
            const correctAnswers = document.querySelector('.correct-answer');
            correctAnswers.scrollIntoView({ behavior: 'smooth', block: "start" });
        }, 4700);
    }

    let year = document.createElement('div');
    results.insertBefore(year, results.firstChild);
    let age = document.createElement('div');
    results.insertBefore(age, results.firstChild);
    let origin = document.createElement('div');
    results.insertBefore(origin, results.firstChild);
    let species = document.createElement('div');
    results.insertBefore(species, results.firstChild);
    let subRole = document.createElement('div');
    results.insertBefore(subRole, results.firstChild);
    let role = document.createElement('div');
    results.insertBefore(role, results.firstChild);
    let gender = document.createElement('div');
    results.insertBefore(gender, results.firstChild);
    let image = document.createElement('div');
    results.insertBefore(image, results.firstChild);

    image.classList.add('result-info');
    image.innerHTML = '<div class="result-info__img bg-' + h.name.toLowerCase().replaceAll(' ', '_') + '"></div>';

    setTimeout(() => {
        gender.classList.add('result-info', answers[0]);
        gender.innerHTML = '<p class="result-info__text">' + h.gender[lang] + '</p>';

        setTimeout(() => {
            role.classList.add('result-info', answers[1]);
            role.style.background = `url("../imgs/${h.role.en}.svg"), var(--${answers[1]}-color)`;
            role.style.backgroundSize = 'cover';
            role.innerHTML = '<p class="result-info__text">' + h.role[lang] + '</p>';

            setTimeout(() => {
                if (h.subRole[lang].length > 10 & !h.subRole[lang].includes(' ')) subRole.classList.add('small-info');
                subRole.classList.add('result-info', answers[2]);
                subRole.style.background = `url("../imgs/sub-roles/${h.subRole.en}.svg"), var(--${answers[2]}-color)`;
                subRole.style.backgroundSize = 'cover';
                subRole.innerHTML = '<p class="result-info__text">' + h.subRole[lang] + '</p>';

                setTimeout(() => {
                    species.classList.add('result-info', answers[3]);
                    species.innerHTML = '<p class="result-info__text">' + h.species[lang] + '</p>';

                    setTimeout(() => {
                        if (h.origin[lang].length > 10 & !h.origin[lang].includes(' ')) origin.classList.add('small-info');
                        origin.classList.add('result-info', answers[4]);
                        origin.innerHTML = '<p class="result-info__text">' + h.origin[lang] + '</p>';

                        setTimeout(() => {
                            age.classList.add('result-info', answers[5]);
                            age.innerHTML = '<p class="result-info__text">' + h.age + '</p>';

                            setTimeout(() => {
                                year.classList.add('result-info', answers[6]);
                                year.innerHTML = '<p class="result-info__text">' + h.year + '</p>';
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
        }, 600);
    }, 600);
}

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <div class="correct-answer__img bg-' + randomHeroe.name.toLowerCase().replaceAll(' ', '_') + '"></div> <p class="correct-answer__name">' + randomHeroe.name + '</p> </div>';

    container.innerHTML = content + container.innerHTML;
    container.classList.remove('correct-answer-hidden');
}

const loadGuessedHeroes = () => {
    let hGuessed = localStorage.getItem('hGuessedInfinite');
    if (hGuessed == null) hGuessed = [];
    else hGuessed = JSON.parse(hGuessed);
    hGuessed.forEach(h => {
        let answers = verifyResults(heroes[h], true);

        let year = document.createElement('div');
        year.classList.add('result-info', answers[6], 'non-animated');
        results.insertBefore(year, results.firstChild);
        let age = document.createElement('div');
        age.classList.add('result-info', answers[5], 'non-animated');
        results.insertBefore(age, results.firstChild);
        let origin = document.createElement('div');
        origin.classList.add('result-info', answers[4], 'non-animated');
        if (heroes[h].origin[lang].length > 10 & !heroes[h].origin[lang].includes(' ')) origin.classList.add('small-info');
        results.insertBefore(origin, results.firstChild);
        let species = document.createElement('div');
        species.classList.add('result-info', answers[3], 'non-animated');
        results.insertBefore(species, results.firstChild);
        let subRole = document.createElement('div');
        subRole.classList.add('result-info', answers[2], 'non-animated');
        subRole.style.background = `url("../imgs/sub-roles/${heroes[h].subRole.en}.svg"), var(--${answers[2]}-color)`;
        subRole.style.backgroundSize = 'cover';
        if (heroes[h].subRole[lang].length > 10 & !heroes[h].subRole[lang].includes(' ')) subRole.classList.add('small-info');
        results.insertBefore(subRole, results.firstChild);
        let role = document.createElement('div');
        role.classList.add('result-info', answers[1], 'non-animated');
        role.style.background = `url("../imgs/${heroes[h].role.en}.svg"), var(--${answers[1]}-color)`;
        role.style.backgroundSize = 'cover';
        results.insertBefore(role, results.firstChild);
        let gender = document.createElement('div');
        gender.classList.add('result-info', answers[0], 'non-animated');
        results.insertBefore(gender, results.firstChild);
        let image = document.createElement('div');
        image.classList.add('result-info', 'non-animated');
        results.insertBefore(image, results.firstChild);

        image.innerHTML = '<div class="result-info__img bg-' + heroes[h].name.toLowerCase().replaceAll(' ', '_') + '"></div>';
        gender.innerHTML = '<p class="result-info__text">' + heroes[h].gender[lang] + '</p>';
        role.innerHTML = '<p class="result-info__text">' + heroes[h].role[lang] + '</p>';
        subRole.innerHTML = '<p class="result-info__text">' + heroes[h].subRole[lang] + '</p>';
        species.innerHTML = '<p class="result-info__text">' + heroes[h].species[lang] + '</p>';
        origin.innerHTML = '<p class="result-info__text">' + heroes[h].origin[lang] + '</p>';
        age.innerHTML = '<p class="result-info__text">' + heroes[h].age + '</p>';
        year.innerHTML = '<p class="result-info__text">' + heroes[h].year + '</p>';

        heroes.splice(h, 1);
    });
    updateLifes();
}

let winStreak = localStorage.getItem('winStreakInfinite');

if (winStreak === null) {
    winStreak = 0;
    localStorage.setItem('winStreakInfinite', winStreak);
}

const winStreakNumber = document.querySelector('.winStreak_number');
const winStreakContainer = document.querySelector('.winStreak_container');
winStreakNumber.textContent = winStreak;

if (winStreak > 0) {
    winStreakContainer.classList.remove('noWinStreak');
} else {
    winStreakContainer.classList.add('noWinStreak');
}

addWinStreak = () => {
    winStreak++;
    localStorage.setItem('winStreakInfinite', winStreak);
    const winStreakNumber = document.querySelector('.winStreak_number');
    winStreakNumber.textContent = winStreak;
    winStreakContainer.classList.remove('noWinStreak');
};

let bestStreak = localStorage.getItem('bestStreakInfinite');
if (bestStreak === null) {
    bestStreak = 0;
    localStorage.setItem('bestStreakInfinite', bestStreak);
}

const bestStreakNumber = document.querySelector('.bestStreak');
bestStreakNumber.textContent = bestStreak;

resetWinStreak = () => {
    if (winStreak > bestStreak) {
        bestStreak = winStreak;
        localStorage.setItem('bestStreakInfinite', bestStreak);
        bestStreakNumber.textContent = bestStreak;
    }
    winStreak = 0;
    winStreakNumber.textContent = winStreak;
    winStreakContainer.classList.add('noWinStreak');
    localStorage.setItem('winStreakInfinite', winStreak);
}

loadGuessedHeroes();