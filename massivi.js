// MASSIVI
"use strict";


const arr = [1, 2, 3, 6, 8];

// arr.pop();   //! udalenie posled Elementa.
// arr.push(10);   //!  dopavit 1 element v konec.

// console.log(arr);

// for ( let i = 0; i < arr.length; i++) {
// console.log(arr[i]);                        //! obichnij perebor
// }

// for ( let valueMy of arr) {                // ! TUT ESTJ BRAKE i CONTINIO
//     console.log(valueMy);                 //! rabotaet s massivami , map , set. 
// }


arr.forEach(function(items, iCount, arrName) {
    console.log(`nomer po porjadku - ${items}: ${iCount} element in side array name - ${arrName}`);     // ! metod udobnij dlja vivedenija massiva
});

// arr.map  // metod izmenenija massiva -- transformacii . 


const str = prompt("", "");

//! sortiruem iz stroki chislo po vozrostaniju.
const arr2 = [3, 45, 12, 7, 81];
arr2.sort();
console.log(arr2);
//! menjaet algoritm bistroj sortirovki . 
function comapareNum(a, b) {
    return a - b;
}
