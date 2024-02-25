/*
maps : performs input operations on each item of array.
chaining: it a method which allows to use multiple methods like map , filter on a single array element. 
filter: as the name signifies it filters out values as per use case scnerios. 
*/

const number = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let newSeries = number
                .map( (items) => (items * 10) )                 //[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map( (items) => (items + 5) )                  //[15, 25, 35, 45, 55, 65, 75, 85, 95, 105]
                .filter( (items) => (items >= 55))              //[55, 65, 75, 85, 95, 105]
                

console.log(newSeries);