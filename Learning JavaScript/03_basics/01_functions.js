//Example
function xbox() {
console.log(["D , E , V , E , S, H"])
}                   
xbox

//example
function addTwoNumbers (string , number){
    console.log(string + number)
}
addTwoNumbers('4' , 7);
console.log(typeof addTwoNumber)

/* parameter is the input type put in a function according to requirement 
Argument is the actual value passed when function is called. 
*/

//Example1 
function multiply(a , b){
    console.log(a*b)
}
multiply(4 , 5);

//example2 
function minus(a , b){
    console.log(a-b)
}
minus(4 , 7)

//example3
function add(string , string){
    console.log(string+ string)
}
add("hello" , "devesh")

//example4
function sum(a , b){
 return result = (a + b)
}
sum(4, 8)

console.log("result: ", result)

//example5
function userLogin (username){
    return `${username} logged in today.`
}
console.log(userLogin("Devesh Sharma"))

//example6
function userWelcome(username){
    if(username === undefined){
    return ("Please enter a username");
    }
    
    return( `${username}logged in evening`)
}
console.log(userWelcome("suresh "))


// OR
// //Predefined user in case of empty input vlaues. 
// function newUser(username = "hiteshu"){
//     if (!username){
//         console.log("enter a name");
//         return
//     }

//     return(`${username} hellio`)
// }
// console.log(newUser("shARMA"))


function newUser(userName = "ram"){
    if(!userName){
        console.log("enter some value");
        return
    }

    return (`${userName} computer says hii`)
}
console.log(newUser("lakhan"))              //enter value then its vl be returned else ram is the default value set for this function


/************************************************************************************************************************************* */
//Example passing object in function
const user = {
    name : "Rajat Sharma",
    cartId:  "#4356"
}

function userCart(...num1){             //use REST (...)operator for returning multiple arguments 
 return num1   
}
console.log(userCart(200 ,400 ,600))

function objectPassing(anyObject){
    console.log(`${anyObject.name} is using cartID ${anyObject.cartId}`)
}
objectPassing(user)

//Example Passing object in function
 let newJob = {
    name: "teshu",
    number: 9817140408,
    DOB: "22 March 2000",
    address: "Ambala, Haryana , India",
 }

 function handleObject(anyObject){
    console.log(`${anyObject.name} lives in ${anyObject.address} and was born on ${anyObject.DOB}. ${anyObject.name}'s contact no. is ${anyObject.number}`)
 }
 handleObject(newJob)

 // or effective way is directly passing object in argument instead of writing seperately.
 
 handleObject({
    name: "teshu",
    number: 9817140408,
    DOB: "22 March 2000",
    address: "Ambala, Haryana , India",

 })


 /* Passing array in function */
 let array = [200 , 500 , 700]

 function passArray(value){
    console.log(value[2])
 }
 passArray(array)

 // OR effective way
 
 passArray([200 , 400 , 700])

