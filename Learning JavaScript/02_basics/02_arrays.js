// push , concat , spread  , flat ,isarray

// Adding 2 arrays via push method  *not a good practice
const bolly_heros = ["ranbir kapoor" , 37 , "Rockstar"];
const holly_heros = ["hugh jackman" , 56 , "X-men" ];

bolly_heros.push(holly_heros);
console.log(bolly_heros);

// Adding arrays via concat method  *not an industry approach
const allHeros = bolly_heros.concat(holly_heros);
console.log(allHeros);


/*Adding 2 or more array via spread OPERATOR its not a method of array  *good approach */

//Example 1
const allHeros2 = [...bolly_heros , ...holly_heros];
console.log(allHeros);

//Example 2
let numbers1 = [123 , 345 , 567];
let numbers2 = [789, 786, 987];
const allNumbers = [...numbers1 , ...numbers2];
console.log(allNumbers[5]);


// Flat method for resolving nested arrays inside arrays
let nestedArray = [1,2,3, [4,5,5 , [56 ,45 ,4]]];
console.log(nestedArray.flat(1));
console.log(nestedArray.flat(Infinity));


// Important Method used while data scraping and converting files in array 
// isarray , from , of

console.log(Array.isArray([1 , 4 , 6, 7]));         //True

console.log(Array.from("devesh"));                  //['d', 'e', 'v', 'e', 's', 'h']

console.log(Array.from({ name: "Aadi sharma"}));    // interview oriented ques key or value

//Example for "Array.of"
let score1 = "100";
let score2 = "200";
let score3 = "300";

console.log(Array.of(score1 , score2 , score3));

// example of Array map()    () => {}
const content = [7,9,10,11]
const testingMap = content.map((content) => {
    return content*2                            //[14, 18, 20, 22]
   
}) 
console.log(testingMap)

//example of array filter 
const items = [1 , 2 , 5, 6, 9, 10];
const evenItems = items.filter((items) => {
    return items % 2 === 0;
})
console.log(evenItems)


// example of find method   
const firstEvenItem = items.find((number) => {          //find method gives 1st element in array that satisfy the callback
    return items % 2 ===0;
})
console.log(firstEvenItem);



// example of findIndex() method   
const firstItem = items.findIndex((number) => {          //findindex method gives  1st element index value in array that satisfy the callback or -1 if no value matched callback.
    return items % 2 ===0;
})
console.log(firstItem);
