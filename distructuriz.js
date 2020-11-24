//Объекты, деструктуризация объектов (ES6)
"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    car: "VW",
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest(); 

const {border, bg} = options.colors;
console.log(border);