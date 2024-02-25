let anyNumber = 100;
console.log(typeof anyNumber);

//Another approach to declare number
let score = new Number( 400 )
console.log(score);

// Conversion to string & using its methods
console.log(score.toString().replace("400", "500"));

// (toFixed) method of Number: to decide the number of decimal places
console.log(score.toFixed(3))      //400.000

// (toPrecision) method of Number: perference is given before decimal and rounds off the value
const number = 1213.8934
console.log(number.toPrecision(4))
console.log(number.toFixed(0))
console.log(number.toPrecision(3))
console.log(number.toFixed(5));
console.log(number.toPrecision(8))
console.log(number.toPrecision(5))
console.log(number.toPrecision(6))
console.log(number.toPrecision());


// (toLocalString) method of Number: to convert number to local string
const plus = 10000000
console.log(plus.toLocaleString("en-IN"));

const word = 543434
console.log(word.toLocaleString("AR-EG"));


// (valueOf) method of number
const tried = new String("100")
console.log(typeof tried)
console.log(tried)

const laptop = tried.valueOf()
console.log(laptop)


// ---------------------------------------------------MATH-----------------------------------------------------------

console.log(Math)

console.log(Math.abs(-8));                                  // 8

console.log(Math.round(33.67));                             // 34

const live = 23.565
console.log(Math.ceil(live));                               // 24

console.log(Math.floor(live));                              // 23

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));       // 1

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));       // 10

// console.log(Math.floor((Math.random() * 100) + 10));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min - 1) + min));
console.log(Math.floor(Math.random() * (max - min + 1) + min));

