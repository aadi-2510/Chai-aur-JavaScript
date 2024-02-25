/* for in loop used for accessing object properties and iterating as per need.
these loops majorlyused for key values

syntax: 
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/
const obejctive1 = {
    js : 'javaScript',
    rb : 'ruby',
    py : 'python' ,
    dsa : 'data Structure and algorithms'
}

for (const key in obejctive1) {
   console.log(`${key} is the called ${obejctive1[key]}`)
}

// for in loop in arrays:

const loop1 = [1,2,5,6,8,10];

for (const key in loop1) {
   console.log(`${loop1[key]}`)
}