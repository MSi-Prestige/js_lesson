"use strict";
// soedinenie - slijanie 2 objektov ! 

const numbers = {
    a: 1,                            
    b: 5,
    c: {
        x: 7,              // tut sozdaem objekt s odnoj vlozennostju.
        y: 4               
    }
};

const newSlime = {
    d: 6,                      // TODO : ESLI KLJUCI ODINAKOVIE ONI PERETERAJUTSA ! zamena .
    e: 90,
    f: {
        g: 30,      
        s: 33
    }
};                  //? Pervij argument Object.assign - eto v nego mi dobavljaem , a v toroj kogo mi tuda >>> daem
console.log(Object.assign(numbers, newSlime));   // ! tak mi soedenili 2 objekta.   v number kidaem newSlime.