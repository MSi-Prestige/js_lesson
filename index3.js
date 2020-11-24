// ! callback , object, methods.
"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};

// console.log(options);

let counter = 0;              //! counter vsex svoistv - odnogo metoda 

for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Properties ${i} have value -- ${options[key][i]}`);
            // counter++;
        }
    } else {
        console.log(`Properties ${key} have value -- ${options[key]}`);
        counter++;
    }
    // todo : {key} - tjanet toljko kljuch
}   // todo: , {opt[key]} - znachenie.

console.log(counter);  // ! tut budet svoistva objekta 3 !!! 

// let counter = 0; 
// for (let key in options) { counter++ } ;      // ! method counter - svoistv object = 4 
// console.log(counter);


