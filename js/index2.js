"use strict";
// ! LESSON 3


let numberOfFilms;
function start() {
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {
    
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из любимых фильмов?", ""),
            b = prompt("На сколько оцениваете его?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 2) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        }
        else {
            console.log("error");
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {         // ! count > 10 i count < 30
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel();

// function showMyDB() {
//     if (!personalMovieDB.privat){
//        console.log(personalMovieDB);       // ! BEZ Argumentov 
//     }
// }
// showMyDB(personalMovieDB);                // todo -   eto 2 odinakovie zapisi. (hidden  - ljuboe slovo)

function showMyDB(hidden) {
    if (!hidden){
       console.log(personalMovieDB);       // ! S Argumentom.  (proverka false - true "privat")
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
  
    for( let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();


console.log(personalMovieDB);
