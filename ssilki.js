//Передача по ссылке или по значению,
//Spread оператор (ES6-ES9)
// ! COPY OBJECT 

"use strict";

let a = 5,
    b = a;

b = b + 5;

// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj;  // Peredaet ssilku na objekt . 
                   // modificiruja ssilku - mi izmenjaem kopiju . 
// copy.a = 10;

// console.log(copy);
// console.log("");
// console.log(obj);

//----------------------------------------------------------------------------------------------
function copy(mainObj) {                    
    let objCopy = {}; // peremennaja (vremennaja) dlja novoj kopii ! dalj6e ne gde ne nuzna . vidna toka tut.
     // v let key mi PEREBIRAEM vse key kak budto (let i<=0.....++)
    for ( let key in mainObj) {    // ! <<<< sjuda zaxodit NUMBERS - a return objCopy kidaet INFU nize v const newNumbers 
        objCopy[key] = mainObj[key];     // dobavljaem kljuchi iz MAIN v COPY
    }
     return objCopy;   // ! ETOT objCopy - eto prosto peremennaja v funkcii ne imeju6aja zna4enija NIZE ! 
      // 1. tut mi v mainObj peredadim (numbers) glavnij objekt.--- 2. i sozdadim mesto dlja KOPII {}; 
      // 3. Posle 4ego mi pereberem vse kljuchi v glavnom(numbers) i prisvoim ix v Copy. 
      // 4. i vernem eto ctobi rabotatj s kopiej return; //? vernem v const newNumbers ! 
}
//----------------------------------------------------------------
const numbers = {
    a: 1,                             // ETO VSE KLONIROVANIE 
    b: 5,
    c: {
        x: 7,              // tut sozdaem objekt s odnoj vlozennostju.
        y: 4               // TODO : v etom meste budet ssilka v COPII ! poverxnostnaja kopija.
    }
};
//-----------------------------------------------------------------

const newNumbers = copy(numbers);    // 1. tut v funkciju COPY - mi peredali objekt NUMBERS () i ona srabotala.
                                     // 2. i to cto pri6lo zapisali v newNum. 
                                     // 3. INFA novogo massiva prixodit iz RETURN objCopy, v metode vi6e ! 
//-----------------------------------------------------------------

newNumbers.a = 10; // >>>> tut prosto menjaem v Copii zna4enie --a-- i smotrim raznicu dvux massivov VSE OK -  zamena

// newNumbers.c = 100;  // >> iz massiva propali vlozenij objekt - ( x;7 y;4) i -C- stal = 100

newNumbers.c.x = 50;  // ! A VOT tut pomenjalosj v obeix massivax - stalo 50 ! - kak bilo so silkoj. 
                      // ! tak kak kopiruja takim sposobom mi berem toljko roditeljskuju strukturu - ne lezit vo vlozennie objekti ! 
                            // TODO : ETO POVERXNOSTNAJA KOPIJA OBJEKTA ! 
console.log(newNumbers);   // movij COPY massiv
console.log("");
console.log(numbers);      // starij massiv llja sravnenija                            










