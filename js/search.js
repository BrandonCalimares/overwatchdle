const heroes = [
    "ana",
    "ashe",
    "baptiste",
    "bastion",
    "brigitte",
    "cassidy",
    "doomfist",
    "dva",
    "echo",
    "genji",
    "hanzo",
    "illari",
    "junkerqueen",
    "junkrat",
    "juno",
    "kiriko",
    "lifeweaver",
    "lucio",
    "mauga",
    "mei",
    "mercy",
    "moira",
    "orisa",
    "pharah",
    "ramattra",
    "reaper",
    "reinhardt",
    "roadhog",
    "sigma",
    "sojourn",
    "soldier76",
    "sombra",
    "symmetra",
    "torbjorn",
    "tracer",
    "venture",
    "widowmaker",
    "winston",
    "wreckingball",
    "zarya",
    "zenyatta"];

const results = document.querySelector('.search-results');
const searchBar = document.querySelector('.chr-search__input');

const displayResult = (result) => {
    let content = result.map((res) => "<li onclick='selectInput(this)'> <img src='imgs/characters/" + res + ".webp' class='search-results__img'>" + "<p class='search-results__text'>" + res + "</p>" + "</li>");
    results.innerHTML = "<ul>" + content.join('') + "</ul>";
};

const selectInput = (list) => {
    let text = list.querySelector('.search-results__text');
    searchBar.value = text.innerHTML;
};

searchBar.addEventListener('keyup', () => {
    let result = [];
    let input = searchBar.value.toLowerCase();
    if (input.length > 0) {
        result = heroes.filter(hero => hero.startsWith(input));
    }
    console.log(result);
    displayResult(result);
});
