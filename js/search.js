const searchResults = document.querySelector('.search-results');
const searchBar = document.querySelector('.chr-search__input');
const form = document.querySelector('.chr-search__form');
let selectedLi = -1;

const displayResult = (result) => {
    selectedLi = -1;
    let content = result.map((res) => "<li onclick='selectInput(this)'> <div class='search-results__img bg-" + res.name.toLowerCase().replaceAll(' ', '_') + "'></div><p class='search-results__text'>" + res.name + "</p></li>");
    searchResults.innerHTML = "<ul>" + content.join('') + "</ul>";
};

const selectInput = (hero) => {
    let text = hero.querySelector('.search-results__text');
    searchBar.value = text.innerHTML;
    let event = new Event('submit');
    form.dispatchEvent(event);
};

searchBar.addEventListener('input', () => {
    let result = [];
    let input = searchBar.value.toLowerCase();
    if (input.length > 0) {
        result = heroes.filter(hero => hero.name.startsWith(input));
    }
    displayResult(result);
});

searchBar.addEventListener('keydown', (e) => {
    const results = searchResults.querySelectorAll('li');
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedLi++;
        if (selectedLi >= results.length) {
            selectedLi = 0;
        }
        results.forEach(li => li.classList.remove('selected'));
        results[selectedLi].classList.add('selected');

    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedLi--;
        if (selectedLi < 0) {
            selectedLi = results.length - 1;
        }
        results.forEach(li => li.classList.remove('selected'));
        results[selectedLi].classList.add('selected');
    } else if (e.key === 'Enter' && selectedLi >= 0) {
        e.preventDefault();
        selectInput(results[selectedLi]);
    }
});
