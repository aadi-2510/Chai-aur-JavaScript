// "Use strict" ; treats all code as newer version of js. //

let name = "Devesh"
let age = 23
let isMarried = "false"
let city = "Pune"
let state;
let game = "50"
/*
Different data types
- String            ( "text" )
- Number            ( int or float )
- Boolean           ( true or false )
- Array             ( [1,2,3] )
- Null              ( its dataType is object )
- Undefined         ( its dataType is underfined )
- BigInt            ( used for real large numbers in firms like fb amazon etc )
- Object            ( {key:value} )
- Symbol            ( used in React.js for components )
*/

console.log(typeof age);
console.log(typeof city)
console.log(typeof state)

// alert(4+4) it doesn't work in node.js but in browser's inspector. //

let newCity = Boolean(city)
console.log(typeof newCity);

let newAge = String("45");
console.log(age);

let newGame = Number(game);
console.log(typeof newGame);