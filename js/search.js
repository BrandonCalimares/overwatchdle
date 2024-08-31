const searchResults = document.querySelector('.search-results');
const searchBar = document.querySelector('.chr-search__input');
const form = document.querySelector('.chr-search__form');

const displayResult = (result) => {
    let content = result.map((res) => "<li onclick='selectInput(this)'> <img src='imgs/characters/" + res.name + ".webp' class='search-results__img'>" + "<p class='search-results__text'>" + res.name + "</p>" + "</li>");
    searchResults.innerHTML = "<ul>" + content.join('') + "</ul>";
};

const selectInput = (list) => {
    let text = list.querySelector('.search-results__text');
    searchBar.value = text.innerHTML;
    let event = new Event('submit');
    form.dispatchEvent(event);
};

searchBar.addEventListener('keyup', () => {
    let result = [];
    let input = searchBar.value.toLowerCase();
    if (input.length > 0) {
        result = heroes.filter(hero => hero.name.startsWith(input));
    }
    displayResult(result);
});
