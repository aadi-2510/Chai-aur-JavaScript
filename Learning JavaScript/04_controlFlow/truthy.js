/* 
Falsy Values:
false , 0 , -0 , BigInt 0n , ""(emply strings) , null , undefined , NaN

Truthy Values:
"false" , "0" , " "(space inside string) , [] , {} , function (){}

*/

//example Truthy:

const username = "Devesh"

if (" "){
    console.log("print me")
}

else{
    console.log("empty")
}

//example Falsy:

if(""){
    console.log("nhi hoga print")
}

else{
    console.log("milegi milegi")
}

//Example for checking empty array:

const fruitNames = []

if (fruitNames.length === 0) {
    console.log("array is empty")
}

// Empty object
const object = {
    // email: "devesh@await.com"
}

if (Object.keys(object).length === 0 ) {
    console.log("empty object")
} 

else{
    console.log( "fuck you Tony")
}

// Nullish coalescing operator (??)

let val1;
// val1 = undefined ?? 10                   // 10
//  val1 = null ?? undefined                 //undefined
// val1 = null ?? NaN                          //NaN
val1 = undefined ?? 5 ?? 10                    //5
console.log(val1)


/* Terniary Operator (?)

condition ? true : false 

*/
const iceTeaPrice = 100;
iceTeaPrice >=80? 
console.log("less than 80") : console.log('more than 80')