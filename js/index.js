let numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");

let answerFilm = prompt("Один из любимых фильмов?", "");
let answerStars = +prompt("На сколько оцениваете его?", "");
let answerFilm2 = prompt("Один из любимых фильмов?", "");
let answerStars2 = +prompt("На сколько оцениваете его?", "");


const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[answerFilm] = answerStars;         // ! chere [] < takie skobki - ne 4erez tochku
personalMovieDB.movies[answerFilm2] = answerStars2;

console.log(personalMovieDB);



