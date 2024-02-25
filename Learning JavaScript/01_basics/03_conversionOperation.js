let score = "100abc";

//checking datatype in from of method- (typeof(score))
console.log(typeof score);  
console.log(typeof (score));  


//Conversion in Number
let thescore = Number(score);
console.log(thescore);


//Conversion in String
let myScore = String(score);
console.log(typeof myScore);   

//Conversion in Boolean
// 0 => false ; 1 => true
let isScore = Boolean(score);
console.log(isScore);

//Conversion in Array
let allValues = Array(score)
console.log(allValues)       

//Check (typeof) Datatype and actual value in console

let score2 = NaN;
let myscore = Number(score2);     
console.log(typeof myscore);
