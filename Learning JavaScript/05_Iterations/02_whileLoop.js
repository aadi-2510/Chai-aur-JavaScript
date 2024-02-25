// While Loop 

let whileExample = 0;

while (whileExample <= 8) {
    console.log(`hello i did it with while loop ${whileExample}`)
    whileExample = whileExample + 2.5
}

// While Array

let myArray = ['shaktiman' , "chutiya " , 'hai']
let element = 0;

while (element < myArray.length) {
    console.log(`here we print ${myArray[element]}`)
    element++
    
}

// Do-while loop:             exception case prints 11 even when the limit is 10
let score = 11
do {
    console.log(`print me ${score}`)
    score++
} while (score <= 10);

