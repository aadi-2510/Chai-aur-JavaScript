/* for each loop is basically used in arrays for call back funcions

-- for each callback fn doesn't require a name 
syntax: 
array.forEach(element => {
    
});

*/

const attire1 = ['red shirt' , 'blue jeans' , 'white shoes'];

// attire1.forEach( function (parameter) {})        normal function 
// attire1.forEach( () => {})                       Arrow function 

attire1.forEach( (items) => {
    console.log("attire1 : ", items);
})

// accessing arrays in objects

const codeLanguages = [
    {
        languageName: "JavaScript",
        languageSymbol: "JS"
    },

    {
        languageName: "Java",
        languageSymbol: "Jawa"
    },

    {
        languageName : "Python",
        languageSymbol: "py"
    },
]

codeLanguages.forEach( (items) => {
    console.log(items.languageSymbol)
})