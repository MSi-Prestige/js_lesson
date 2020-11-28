"use strict";

//Задачи с собеседований на понимание основ

// let x = 5; alert(++x);   // s peredi ++ budet = 6 , za X ++  budet e6e 5 .

// console.log(typeof([]+false)); string //! kogda massiv pustoj on budet priveden k stroke . ( pri slozeniee 4egoto so strokoj budet stroka.)

//? [] + false - null + true;

      //!       false   NaN     NaN 
console.log([] + false - null + true);  // NaN 

// let y = 1;
// let x = y = 2;
// alert(x);         //! 2 .

console.log([] + 1 + 2);   // "12"  string
alert("a"[0]);

          //? 2 pravdivo , 1 pravdivo , null - eto loznoe - ego i vernet . 
console.log(2 && 1 && null && 0 && undefined);  //! VSEGA ZAPINAETSJA NA LZI  (FALSE)


          //? tut estj !! <<< oni delajut sleduju6uju za nimi zapisj v Boolean . 
console.log(!!( 1 && 2 ) === (1 && 2));  // FALSE 



// TABLICA - prioretetov operatorov. 6 / 5 /   && prioretet vi6e . (6)
//! ILI zapinaetsa na pravde.
 //!     3         3      3
alert( null || 2 && 3 || 4);  // 3   tak kak vezde pravda. 

const a = [1,2,3];
const b = [1,2,3];   // a i b  NE ravni . eto raznie massivi poxozie po strukture.

console.log( a == b);

alert( +"Infinity");  // stoit unarnij +  i tam tip dannix NUMBER . ( no viveditsja Stroka "Infinity")


//!  0  ------------   v logicheskom kontekste eto FALSE 

