/* filter method of array

*/
//Example Approach 1 
const line1 = [1,2,3,4,5,6,7,8,9,10];
let newLine = line1.filter( (items) => (items > 5))
console.log(newLine);

//Example Approach 2
const myLine = [];

line1.forEach( (item) => {
    if( item >4 ){
        myLine.push(item)
    }
})
console.log(myLine);

