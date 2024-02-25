/* 
For loop

syntax: 
 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for ( index value ; condition ; increment){
    execution 
}

*/

// for (let i = 2; i < 6; i++) {
//     const element = i;
//     // console.log(element)
    
// }


// if condition in Loop
for (let i = 0; i <= 7; i++) {
    if (i === 6) {
        console.log(`${i} is a good digit`)
    }
    console.log(i)
}


// for loop inside for loop:
for ( i = 1 ; i <= 20 ; i++){
    for( j = 1 ; j <=10 ; j++){
        console.log(`${i} * ${j} + 1 = ${i*j+1}`)
    }
    console.log("i am outer loop")
}

// Break & Continue 
for (let i = 0; i < 20; i++) {
    console.log(i)
    if (i == 8) {
        console.log("hey its 8")
        // break
        continue
    }
    
}

// Array Loop 
const newArray = ["ram" , "sham" , "suresh"]

for (let i = 0; i < (newArray.length); i++) {
    const element = newArray[2];
    console.log(element)
}

// write table from 1 to 100.. also use break and continue methods