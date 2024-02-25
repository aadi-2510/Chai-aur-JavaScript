/*
Caterogy of datatype on how to store and access data:

1. Primitive (7 Types call by value)

-string

-number

-boolean

-null

-undefined

-symbol (to assign unique vlaue to an object)
ForExample: let userId = Symbol("5454");
            let anotherId = Symbol("5454");
            yet if we check console.log(userId === anotherId); it will return false!

-bigint: 
ForExample: let a = 123456789012345678990n;

2. Non-Primitive/ Reference
--Array
--Object
--Function

// JavaScript is a DYNAMICALLY TYPED LANGUAGE. In dynamically typed languages, variable types are determined at runtime,
   and you don't need to explicitly specify the data type of a variable when you declare it. 
   JavaScript uses dynamic typing, which means you can assign values of different types to the same variable over 
   the course of your code.
 For Example:
   let x = 5; // x is a number
   x = "Hello, World!"; // x is now a string
   x = [1, 2, 3]; // x is an array


whereas STATICALLY TYPED LANGUAGE require you to declare the data type of a variable when you define it, 
and you cannot change the data type of the variable during its lifetime without redeclaration. 

*/

console.log(typeof "Devesh") 


//---------------------------------------------------STACK & HEAP MEMORY---------------------------------------------------------------------------------------- 

/* Changes that have been made in Stack memory will be not change the Original Value else it will be change just 
   in the copy of that data.
   
   Examples Stack Memory:
*/
let myName = "Devesh Sharma";
let otherName = myName;
otherName = "Aadi Sharma";
console.log(myName);            // Devesh Sharma
console.log(otherName);         // Aadi Sharma

let islove = "True";
let otherLove = islove;
otherLove = "false";
console.log(islove );          // True
console.log(otherLove );      // false

let attire1 = "sexy";
let attire2 = attire1;
attire2 = "osm";
console.log(attire1)

//Example
let song = "BlackLgoon";
let othersong = song;
othersong = "still corners";
console.log(song);            //blacklagoon
console.log(othersong);       //still corners

/* While in Heap memory the original value will be changed. Because it takes reference of the original value 
   and stored in heap memory, NON Premetive data type are stored in heap memory.
   
   Example 1 Heap Memory:
*/

let user1 = {
    name: "Devesh",
    age: 23
};

user2 = user1;

user2.name= "aadi sharma";
user2.age = "26";

console.log(user1)
console.log(user2)


// Example 2 Heap Memory:
let oldAccount = {
    name: "Teshu",
    age: 23,    
}

let newAccount = oldAccount;
newAccount.name = "hiteshi";
newAccount.age = "24";
 console.log(oldAccount)
 console.log(newAccount)

 //Example 3
 let example = ["air" , "water" , "wind"];
 let example2 = example; 
 example2.unshift("pollution");
 console.log(example)

 //Example 4
 let sum1 = [1 ,3, 5 ,7];
 let sum2 = sum1;
 sum2.unshift(99);
 console.log(sum1);

