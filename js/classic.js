const form = document.querySelector('.chr-search__form');
const results = document.querySelector('.results-content');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('.chr-search__input');
    const searchValue = input.value.toLowerCase();
    let heroe = heroes.filter(hero => hero.name == searchValue);
    if (heroe.length > 0) {
        showResults(heroe[0]);
    }
})

const showResults = (h) => {
    let content = '<div class="result-info"><img src="imgs/characters/' + h.name + '.webp" alt="' + h.name + '" class="result-info__img"></div>';
    content += '<div class="result-info correct"><p class="result-info__text">' + h.gender.es + '</p></div>';
    content += '<div class="result-info correct"><p class="result-info__text">' + h.class.es + '</p></div>';
    content += '<div class="result-info correct"><p class="result-info__text">' + h.species.es + '</p></div>';
    content += '<div class="result-info correct"><p class="result-info__text">' + h.origin.es + '</p></div>';
    content += '<div class="result-info correct"><p class="result-info__text">' + h.height.toFixed(2) + 'm</p></div>';
    content += '<div class="result-info correct"><p class="result-info__text">' + h.year + '</p></div>';
    results.innerHTML = content + results.innerHTML;

}