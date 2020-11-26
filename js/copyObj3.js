// object + object + {}
// LESSON ------------- 22 
"use strict";

const person = {
    name: "Ilja",
    age: 32,
    firstName: "Kristafenko",
    car: "VW"
};

const personGirl = {
    nameGirl: "Vija",
    ageGirl: 33,
    heightGirl: 170,
    loveGirl: "yes"
};
                                            //TODO: ({}, person)  --> klonirovanie objekta person v novij.  
//--------------------------------------------------

console.log(person);
const copyManWoman = Object.assign({}, person);   // ! tut mi cloniruem objekt kotorij stal dvojnim v novij ! 
copyManWoman.name = "Super man Ilja";             // menjaem novomu klonu imja objektu.
copyManWoman.car = "SUPER TOUAREG";
console.log(copyManWoman);

//--------------------------------------------------

console.log(Object.assign(copyManWoman, personGirl)); // ! soedenili 2 objekta person  v 1 objekt. 
