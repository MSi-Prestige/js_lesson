"use strict";   // ! strogij rezim 
                // ! peremennie toljko LET I CONST
// a = 15;
// console.log(a);  >> v ne strogom rezime rabotaet - i eto ne praviljno.

let number1 = 3.4;

console.log(4/0);   //infinity    ili --infin


console.log("ilja" * 5); // NaN  not a number.
const person = "ilaj";  // string

let und;  //   undefined  pustaja korobka. peremennaja

// let number = 5;

// const leftBorderWidth = 1; 

// console.log(number);


// const object = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// let arr = ["pum.png", "orange", "hello", 4, 6, {}];
// console.log(arr[1]);

// alert("hello");
// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("you have 18?", "net mne 35");  // !  +  <<< i zajdet NUMBER vmesto string +prompt . 
// console.log(answer);
// console.log(typeof(answer));  // ! posmotretj 4to tam za tip !  ETO STROKI VSEGDA !! 
// console.log(answer + 5); // = 

// const answer = [];

// answer[0] = prompt("kak tvoe imja?");
// answer[1] = prompt("kak tvoe familija?");
// answer[2] = prompt("skoljko let?");

// document.write(answer);
// console.log(typeof(answer));

//const category = "toys";
//console.log(`https://someurl.com/${category}/5`);  // ! https://someurl.com/toys/5

//const user = "Ilja";
//alert(`privet, ${user}`);            // ! interpolacija 


let incr = 10,
    decr = 10;

    incr++;  // ! postfiksnaja forma     
    decr--;
console.log(incr,decr);

let incr2 = 10,
    decr2 = 10;

    ++incr2;         // ! Prefiksnaja forma. v peredi - + .
    --decr2; 

// console.log(incr2,decr2);
console.log(incr2++,decr2--);