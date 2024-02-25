//Array Declaration

const myarr = [1 , 2 , 3 , 4 , 5 , 6, 7 , 8, 9, 10];
console.log(typeof myarr);
  
const newarray = ["Devesh" , 23 , true];
console.log(newarray);

const newarray2 = new Array("sharma" , 26 , "bengaluru" , false)
console.log(newarray2);

// calling Array with index value
console.log(newarray2[1])


//Array Methods
const numbers = [10 , 11 , 12 , 13 , 14 , 15]
numbers.push(7);                                        //simply add the number in array

numbers.pop();                                          // simply eleminates last added number from array

numbers.unshift(33);                                    // adds given value in the begining of array(not recommended)

numbers.shift()                                         // removes unshift value

console.log(numbers);

//includes method check if the value is present in given array
console.log(numbers.includes(13));

//indexOf method check the index value in given array and gives out index number
console.log(numbers.indexOf(13))

//join method coverts the array into comma seperated strings
const newarray3 = numbers.join();
console.log(newarray3);
console.log(numbers);

//Splice and Slice method of array
console.log("a" , myarr);

let mna1 = myarr.slice(2, 5);               //slice methods just includes the range and show copy of array
console.log("b" ,mna1);

let mna2 = myarr.splice(1 , 5)              //splice methods manipulates original array 
console.log("c" , mna2);
console.log(myarr);

//example
let data1 = [3,4,5,6,23,56]
let mm = data1.splice(1 , 5)
console.log(mm)
console.log(data1);