const appOne = new Object();
// console.log(appOne);

let newUser = {};
newUser.name = "hiteshi" ,
newUser.id = "#ff5621"

console.log(newUser.name);

let activeUser = {
    email: "hiteshi@google.com",
    fullname : "Sharma Hiteshi",
    age : {
        userAge : "32",
    }

};
 console.log(activeUser.age.userAge)

 // Object Assign Property  *not used much in Industry
 let obj1 = { 1 : "s" , 2:  "o"};
 let obj2 = { 3 : "f" , 4:  "f"};
 let obj3 = { 5 : "t" , 6:  "y"};

 const obj4 = Object.assign({}, obj1 , obj2 , obj3);
 console.log(obj4);


 // Best industry practice for adding objects is SPREAD Operator
const obj41 = {...obj1 , ...obj2 , ...obj3};
console.log(obj41)

// Accessing data of keys or values of object :
console.log(Object.keys(newUser));                 // [ 'name', 'id' ]
console.log(Object.values(newUser));               // [ 'hiteshi', '#ff5621' ]

console.log(Object.entries(newUser));               // [ [ 'name', 'hiteshi' ], [ 'id', '#ff5621' ] ]
console.log(newUser.hasOwnProperty("#ff5621"));     // false


/****************************************************************************************************** */

//Destructuring of object

const tinderUser = {
    name: "devesh sharma",
    email: "sdevesh1997@gmail.com",
    registeredUserId: '#654467',
}

console.log(tinderUser.registeredUserId);
// OR

//Destructing of object more used in react code
const {registeredUserId : iD} = tinderUser;
console.log(iD); 


