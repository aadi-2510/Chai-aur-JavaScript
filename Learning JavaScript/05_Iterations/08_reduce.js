/*
Reduce method : ( best practised in adding items in shopping cart)
callback function on each element of the array, in order, passing in the 
return value from the calculation on the preceding element.The final result of running the reducer
 across all elements of the array is a single value.
 
--accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

--currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

--currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

--array
The array reduce() was called upon.

SYNTAX: 

const variable Name = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

*/

//Example of reduce method arrow function
const series1 = [1, 2, 3, 4]

const newSeries = series1.reduce( (x , y ) => (x + y ), 0 )

// console.log( newSeries);

//Example with normal function 
const series2 = [4, 5, 6, 7, 8]                                                       //10

const newline = series2.reduce( function (accumulator , currentValue) {
    // console.log( `acc : ${accumulator} , curval : ${currentValue}`);
    // return accumulator + currentValue
}, 0 )

// example 2 shopping cart 
const shoppingCart = [
    {
        itemName: 'ToothBrush',
        itemPrice: 50
    },
    {
        itemName: 'parachute',
        itemPrice: 5000
    },
    {
        itemName: 'Samsung Galaxy S22+',
        itemPrice: "35000"
    },
    {
        itemName: 'Water Bottle Milton',
        itemPrice: 250
    },
    {
        itemName: 'Bean bag',
        itemPrice: 700
    },
    {
        itemName: 'Pen',
        itemPrice: 25
    },
    {
        itemName: 'Home Utensil',
        itemPrice: 999
    },
]

const cartTotal = shoppingCart.reduce( (acc , item) => {
    if( typeof item.itemPrice === "string" ){
        return acc
    }
    console.log(`acc : ${acc} + item : ${item}`)
    return acc + Number(item.itemPrice)
}, 0)
console.log(cartTotal)