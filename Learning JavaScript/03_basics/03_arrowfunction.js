const practice = {
    userName : "Dubey",
    POB : 'kaithal',

    welcomeUser : function (){
        console.log(`${this.userName} was born in ${this.POB}`)
        console.log(this)
    }
}
console.log(practice.welcomeUser())
practice.userName = "baby"
console.log(practice.welcomeUser())

//this in function
function hello (){
    console.log(this)
}
hello()

//Arrow Function Type 1 

//  () => {}

const addTwoNumber = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwoNumber(5 ,9))

// Implicit Arrow Function syntax
const addthree = (num1, num2 , num3) => (num1 + num2 + num3)
console.log(addthree(2,5,8))

// for object arrow function
const anyThing = (num1, num2) => ({userName : "chai aur code"})

console.log(anyThing(3 , 5))