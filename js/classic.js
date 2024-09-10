const results = document.querySelector('.results-content');
const randomHeroe = heroes[Math.floor(Math.random() * heroes.length)];
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
        const index = heroes.findIndex(h => h.name == hero[0].name);
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