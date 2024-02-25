// Old Format of adding string
let newFile = "Devesh"
let scale = "30"
// console.log(newFile + scale + " value");


// New Format plus better in code readbility
console.log(`Hello my name is ${newFile} and my age is ${scale}`);
console.log(`hi this is ${newFile} and i've been in this world for ${scale} fucking years`);
console.log(`hii there its me ${newFile} and till now uhalready know im ${scale}`);
console.log(`hola amigos! this is ${newFile}, je tres ${scale} age`);
console.log(`whats up danger! this is ${newFile}, tell mama im ${scale} years old now`);
//String Declaration
const anyName = new String('deveshsharma')
console.log(anyName[3]);
console.log(anyName[7]);

//Exmple 2
const newElement = new String(`Aadisharma`)
console.log(newElement[4]);
// String Methods:                                                  (Important)
// console.log(anyName.length);
// console.log(anyName.indexOf('sh'));
// console.log(anyName.lastIndexOf('sh'));
// console.log(anyName.search('sh'));
// console.log(anyName.match('sh'));
// console.log(anyName.replace('sh', 'k'));
// console.log(anyName.repeat(3));
// console.log(anyName.concat(' ', 'sharma'));
// console.log(anyName.toUpperCase());
// console.log(anyName.toLowerCase());
// console.log(anyName.trim());
// console.log(anyName.trimStart());
// console.log(anyName.trimEnd());
// console.log(anyName.includes('sharma'));
// console.log(anyName.split(''));
// console.log(anyName.split(''));
// console.log(anyName.startsWith('Devesh'));
// console.log(anyName.endsWith('sharma'));


// Read all methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

/*
String (At) method: The at() method of String values takes an integer value and returns a new String consisting of 
the single UTF-16 code unit located at the specified offset. 
This method allows for positive and negative integers. Negative integers count back from the last string character.
*/
const myIdea = "There is no one better than you."
let newidea = myIdea.at(6)
console.log(newidea);

const statement = "Hello, I'm Devesh Sharma. I'm from kkr, India"
console.log(statement.at(-14));


let index = 111
console.log(statement.at(index));

//CharAT method doesn't work with negative index and displays emplty stringif index is out of range
console.log(statement.charAt(-1))      


//concat method
const user = String("ranbir")
console.log(user.concat("", " kapoor"))