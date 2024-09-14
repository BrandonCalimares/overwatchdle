const results = document.querySelector('.results-content');

const currentDate = new Date();
if (((currentDate.getUTCFullYear() * (currentDate.getUTCMonth() + 1)) % heroes.length) == 0) currentDate.setFullYear(currentDate.getUTCFullYear() + 1)
const index = (currentDate.getUTCFullYear() * currentDate.getUTCDate() * (currentDate.getUTCMonth() + 1)) % heroes.length
const randomHeroe = heroes[index];


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
    let correctAnswers = ["wrong", "wrong", "wrong", "wrong", "wrong", "wrong"];
    if (h.gender.es == randomHeroe.gender.es) correctAnswers[0] = "correct";
    if (h.class.es == randomHeroe.class.es) correctAnswers[1] = "correct";
    if (h.species.es == randomHeroe.species.es) correctAnswers[2] = "correct";
    if (h.origin.es == randomHeroe.origin.es) correctAnswers[3] = "correct";
    if (h.height > randomHeroe.height) correctAnswers[4] = "lower";
    else if (h.height < randomHeroe.height) correctAnswers[4] = "higher";
    else correctAnswers[4] = "correct";
    if (h.year > randomHeroe.year) correctAnswers[5] = "lower";
    else if (h.year < randomHeroe.year) correctAnswers[5] = "higher";
    else correctAnswers[5] = "correct";
    return correctAnswers;
}

const showCorrectAnswer = () => {
    const container = document.querySelector('.correct-answer');
    let content = '<p class="correct-answer__text">GG EZ</p>';
    content += '<div class="correct-answer__hero"> <img src="imgs/characters/' + randomHeroe.name + '.webp" alt="' + randomHeroe.name + '" class="correct-answer__img"> <p class="correct-answer__name">' + randomHeroe.name + '</p> </div>';
    content += '<p class="correct-answer__tries">Numero de intentos: ' + tries + '</p>';

    container.innerHTML = content + container.innerHTML;
    container.classList.remove('correct-answer-hidden');
}

const showResults = (h) => {
    let answers = verifyResults(h);

    if (JSON.stringify(answers) == JSON.stringify(["correct", "correct", "correct", "correct", "correct", "correct"])) {
        const input = document.querySelector('.chr-search__input');
        input.disabled = true;
        setTimeout(() => {
            showCorrectAnswer();
            window.scrollTo(0, document.body.scrollHeight);
        }, 3800);
    }

    let year = document.createElement('div');
    results.insertBefore(year, results.firstChild);
    let height = document.createElement('div');
    results.insertBefore(height, results.firstChild);
    let origin = document.createElement('div');
    results.insertBefore(origin, results.firstChild);
    let species = document.createElement('div');
    results.insertBefore(species, results.firstChild);
    let class_ = document.createElement('div');
    results.insertBefore(class_, results.firstChild);
    let gender = document.createElement('div');
    results.insertBefore(gender, results.firstChild);
    let image = document.createElement('div');
    results.insertBefore(image, results.firstChild);

    image.classList.add('result-info');
    image.innerHTML = '<img src="imgs/characters/' + h.name + '.webp" alt="' + h.name + '" class="result-info__img">';

    setTimeout(() => {
        gender.classList.add('result-info', answers[0]);
        gender.innerHTML = '<p class="result-info__text">' + h.gender.es + '</p>';

        setTimeout(() => {
            class_.classList.add('result-info', answers[1]);
            class_.innerHTML = '<p class="result-info__text">' + h.class.es + '</p>';

            setTimeout(() => {
                species.classList.add('result-info', answers[2]);
                species.innerHTML = '<p class="result-info__text">' + h.species.es + '</p>';

                setTimeout(() => {
                    origin.classList.add('result-info', answers[3]);
                    origin.innerHTML = '<p class="result-info__text">' + h.origin.es + '</p>';

                    setTimeout(() => {
                        height.classList.add('result-info', answers[4]);
                        height.innerHTML = '<p class="result-info__text">' + h.height.toFixed(2) + '</p>';

                        setTimeout(() => {
                            year.classList.add('result-info', answers[5]);
                            year.innerHTML = '<p class="result-info__text">' + h.year + '</p>';
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
        }, 600);
    }, 600);
}

const addToCookies = (h) => {
    if (document.cookie == '') {
        document.cookie = `heroesGuessed = []; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /classic.html`;
    }
    const cookies = document.cookie;
    const hGuessed = JSON.parse(cookies.split('=')[1]);
    hGuessed.push(heroes.indexOf(h));
    document.cookie = `heroesGuessed = ${JSON.stringify(hGuessed)}; expires = ${new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate() + 1)).toUTCString()}; path= /classic.html`;
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

        if (JSON.stringify(answers) == JSON.stringify(["correct", "correct", "correct", "correct", "correct", "correct"])) {
            const input = document.querySelector('.chr-search__input');
            input.disabled = true;
            showCorrectAnswer();
        }

        let year = document.createElement('div');
        year.classList.add('result-info', answers[5], 'non-animated');
        results.insertBefore(year, results.firstChild);
        let height = document.createElement('div');
        height.classList.add('result-info', answers[4], 'non-animated');
        results.insertBefore(height, results.firstChild);
        let origin = document.createElement('div');
        origin.classList.add('result-info', answers[3], 'non-animated');
        results.insertBefore(origin, results.firstChild);
        let species = document.createElement('div');
        species.classList.add('result-info', answers[2], 'non-animated');
        results.insertBefore(species, results.firstChild);
        let class_ = document.createElement('div');
        class_.classList.add('result-info', answers[1], 'non-animated');
        results.insertBefore(class_, results.firstChild);
        let gender = document.createElement('div');
        gender.classList.add('result-info', answers[0], 'non-animated');
        results.insertBefore(gender, results.firstChild);
        let image = document.createElement('div');
        image.classList.add('result-info', 'non-animated');
        results.insertBefore(image, results.firstChild);

        image.innerHTML = '<img src="imgs/characters/' + heroes[h].name + '.webp" alt="' + heroes[h].name + '" class="result-info__img">';
        gender.innerHTML = '<p class="result-info__text">' + heroes[h].gender.es + '</p>';
        class_.innerHTML = '<p class="result-info__text">' + heroes[h].class.es + '</p>';
        species.innerHTML = '<p class="result-info__text">' + heroes[h].species.es + '</p>';
        origin.innerHTML = '<p class="result-info__text">' + heroes[h].origin.es + '</p>';
        height.innerHTML = '<p class="result-info__text">' + heroes[h].height.toFixed(2) + '</p>';
        year.innerHTML = '<p class="result-info__text">' + heroes[h].year + '</p>';

        heroes.splice(h, 1);
    });
}

loadGuessedHeroes();