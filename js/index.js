"use strict";
let numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0;
while (i < 2) {
    const a = prompt("Один из любимых фильмов?", ""),
        b = prompt("На сколько оцениваете его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 2) {
        personalMovieDB.movies[a] = b;
        i++;
        console.log("done");
    }
    else {
        console.log("error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {         // ! count > 10 i count < 30
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("error");
}

console.log(personalMovieDB);
