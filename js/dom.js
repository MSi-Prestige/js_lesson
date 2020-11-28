"use strict";

const box =  document.getElementById("box");
console.log(box);

// const btns = document.getElementsByTagName("button");   //! kollekcija psevdo massiva .
// console.log(btns); 

// const btns = document.getElementsByTagName("button")[1];
// console.log(btns);                                          //! 1 sposob

const btns = document.getElementsByTagName("button");
console.log(btns[1]);                                          //! 2 sposob

const circles = document.getElementsByClassName("circle");
console.log(circles[1]);


const hearts = document.querySelectorAll(".heart");   // ! >>>>>>>>   obazateljno TOCHKA .  tak kak All.

hearts.forEach(item => {                           //? 1            //  2
    console.log(item);            // ! hearts.forEach(item, (function { console.log(item) };
});

const firstElem = document.querySelector(".heart");         //? vivodit pervij element popav6ijsa pod zapros. samij pervij na stranice
console.log(firstElem);



