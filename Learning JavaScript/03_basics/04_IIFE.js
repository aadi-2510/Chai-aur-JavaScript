/*
 IIFE - Immediately Invoked Function Expression
It is used to eliminate pollution (means other varibales outside the local scope are accessible in global scope which creates confusion or unwanted varibales)
 caused by global scope i.e.

so IIFE function is wrapped inside ()() and serves the purpose.

*/

//example of named IIFE 
(function newDoc (value){
    // console.log("DB CONNECTED")
   console.log(value)
    return value
})(2 + 4);

//example with arrow function
 ( (address) => {
    console.log(`lets print my address ${address}`)  
 }
)("h.no 2220 , sector 3, kurukshetra")