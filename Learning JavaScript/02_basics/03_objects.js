/* Objects are declared by 2 ways :
1) Literals
2) Constructor 

when a object is created using constructor its called singleton, its one of a type.

*/

//Declaration of Object :
// INTERVIEW POINT: syntax for symbol declaration  in object 

let mySymbol = Symbol("Hello");

const firstObject = {
    name: "Devesh Sharma",
    age : 26,
    [mySymbol] : ("Hello Aadi Sharma") ,
    availability: ["saturday" , "sunday" , "allweek"],
    contact: 8059259258, 
   
}


// Access of object : 
// console.log(firstObject.name);                  // Not correct approach for object
console.log(firstObject["name"]);

console.log(firstObject[mySymbol]);
console.log(typeof mySymbol)


// Changing values in object:
// freezing values in case we don't want to change values in future
firstObject.contact = 998877889;
Object.freeze(firstObject);

firstObject.contact = 483394844;                // values not changed
console.log(firstObject["contact"]);

firstObject.age = 30;                           // values not changed
console.log(firstObject["age"]);

console.log(firstObject);

