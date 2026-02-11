const results = document.querySelector('.results-content');

const currentDate = new Date();
const seed = currentDate.getUTCFullYear() * 10000 + (currentDate.getUTCMonth() + 1) * 100 + currentDate.getUTCDate();
const randomSin = Math.sin(seed) * 10000;
const randomNormalized = randomSin - Math.floor(randomSin);
const index = Math.floor(randomNormalized * heroes.length);
const randomHeroe = heroes[index];

const lang = window.location.pathname.startsWith("/en") ? "en" : "es";

let tries = 0;

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
        heroes[index] = null;
        heroes.splice(index, 1);
        showResults(hero[0]);
    }
})

const verifyResults = (h) => {
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
    return correctAnswers;
}

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <img src="/imgs/characters/' + randomHeroe.name + '.webp" alt="' + randomHeroe.name + '" class="correct-answer__img"> <p class="correct-answer__name">' + randomHeroe.name + '</p> </div>';
    if (lang == 'es')
        content += '<p class="correct-answer__tries">Número de intentos: ' + tries + '</p>';
    else
        content += '<p class="correct-answer__tries">Number of attempts: ' + tries + '</p>';

    container.innerHTML = content + container.innerHTML;
    container.classList.remove('correct-answer-hidden');
}

const showResults = (h) => {
    let answers = verifyResults(h);

    if (JSON.stringify(answers) == JSON.stringify(["correct", "correct", "correct", "correct", "correct", "correct", "correct", "correct"])) {
        const input = document.querySelector('.chr-search__input');
        input.disabled = true;
        setTimeout(() => {
            showCorrectAnswer();
            window.scrollTo(0, document.body.scrollHeight);
        }, 3800);
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
    image.innerHTML = '<img src="/imgs/characters/' + h.name + '.webp" alt="' + h.name + '" class="result-info__img">';

    setTimeout(() => {
        gender.classList.add('result-info', answers[0]);
        gender.innerHTML = '<p class="result-info__text">' + h.gender[lang] + '</p>';

        setTimeout(() => {
            role.classList.add('result-info', answers[1]);
            role.innerHTML = '<p class="result-info__text">' + h.role[lang] + '</p>';

            setTimeout(() => {
                if (h.subRole[lang].length > 10 & !h.subRole[lang].includes(' ')) subRole.classList.add('small-info');
                subRole.classList.add('result-info', answers[2]);
                subRole.innerHTML = '<p class="result-info__text">' + h.subRole[lang] + '</p>';

                setTimeout(() => {
                    species.classList.add('result-info', answers[3]);
                    species.innerHTML = '<p class="result-info__text">' + h.species[lang] + '</p>';

                    setTimeout(() => {
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

const addToCookies = (h) => {
    if (document.cookie == '') {
        document.cookie = `heroesGuessed = []; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /classic`;
        document.cookie = `heroesGuessed = []; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /en/classic`;
    }
    const cookies = document.cookie;
    const hGuessed = JSON.parse(cookies.split('=')[1]);
    hGuessed.push(heroes.indexOf(h));
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /classic`;
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /en/classic`;
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
        let answers = verifyResults(heroes[h]);

        if (JSON.stringify(answers) == JSON.stringify(["correct", "correct", "correct", "correct", "correct", "correct", "correct", "correct"])) {
            const input = document.querySelector('.chr-search__input');
            input.disabled = true;
            showCorrectAnswer();
        }

        let year = document.createElement('div');
        year.classList.add('result-info', answers[6], 'non-animated');
        results.insertBefore(year, results.firstChild);
        let age = document.createElement('div');
        age.classList.add('result-info', answers[5], 'non-animated');
        results.insertBefore(age, results.firstChild);
        let origin = document.createElement('div');
        origin.classList.add('result-info', answers[4], 'non-animated');
        results.insertBefore(origin, results.firstChild);
        let species = document.createElement('div');
        species.classList.add('result-info', answers[3], 'non-animated');
        results.insertBefore(species, results.firstChild);
        let subRole = document.createElement('div');
        subRole.classList.add('result-info', answers[2], 'non-animated');
        if (heroes[h].subRole[lang].length > 10 & !heroes[h].subRole[lang].includes(' ')) subRole.classList.add('small-info');
        results.insertBefore(subRole, results.firstChild);
        let role = document.createElement('div');
        role.classList.add('result-info', answers[1], 'non-animated');
        results.insertBefore(role, results.firstChild);
        let gender = document.createElement('div');
        gender.classList.add('result-info', answers[0], 'non-animated');
        results.insertBefore(gender, results.firstChild);
        let image = document.createElement('div');
        image.classList.add('result-info', 'non-animated');
        results.insertBefore(image, results.firstChild);

        image.innerHTML = '<img src="/imgs/characters/' + heroes[h].name + '.webp" alt="' + heroes[h].name + '" class="result-info__img">';
        gender.innerHTML = '<p class="result-info__text">' + heroes[h].gender[lang] + '</p>';
        role.innerHTML = '<p class="result-info__text">' + heroes[h].role[lang] + '</p>';
        subRole.innerHTML = '<p class="result-info__text">' + heroes[h].subRole[lang] + '</p>';
        species.innerHTML = '<p class="result-info__text">' + heroes[h].species[lang] + '</p>';
        origin.innerHTML = '<p class="result-info__text">' + heroes[h].origin[lang] + '</p>';
        age.innerHTML = '<p class="result-info__text">' + heroes[h].age + '</p>';
        year.innerHTML = '<p class="result-info__text">' + heroes[h].year + '</p>';

        heroes.splice(h, 1);
    });
}

loadGuessedHeroes();