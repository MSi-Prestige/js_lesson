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
options.makeTest();   // funkcija vnutri Objekta. zapusk ee tut. 

//! smotrim skoljko ELEMENTOV(kljuchei) u objekta - 5 , ili esli bez length to budet [ 1 , 2 ,3 ,4,5 massiv s nazvanijami]
// console.log(Object.keys(options).length);   