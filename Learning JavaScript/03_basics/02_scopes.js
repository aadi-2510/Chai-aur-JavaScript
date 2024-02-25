let a = 30;
const b = 40;
var c = 60;

console.table([a , b, c])

/* 
Anything between inside of {} in a function or if/else is block scope.
AND
any vlaues outside of { } is global scope.

VAR shows incorrect value considering block scope and global scope.
*/

//Example of VAR
if(true){
    let a = 30;
    const b = 40;
    var c = 60;
}
console.log(a);                 // a is not defined 
console.log(b);                 // b is not defined
console.log(c);                 // prints value = 60

// thts why var keyword is not used because of issue with block scope.



/********************************************************************************************************* */

//Closure is when child function can access parent's variables its called closure (basic defination)

//Example of block Scope inside block Scope
if (true){
    const username = "aaditiya" 
    
    if(username === "aaditiya"){
        const duplicate = ' 33'
        console.log(username +  duplicate)
    }
}

// Different ways to write function

//basic way:
function addOne(num){
    return num + 1
}
console.log(addOne(6))

// Expression function
const addtwo = function(num){
    console.log(`${num+2} is the result of function.`)
    return num + 2
}
addtwo(6)