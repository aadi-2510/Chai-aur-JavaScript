/* for of loop  : it is a simple loop that doesn't include increment in iteration unless mentioned.

for of loop is majorly used for key & values.
Syntax: 

for (const interation of object){}

-- for of loop doesn't work for objects , a differnt loop for in is used

*/
const app1 = [`big basket ; grammerly ; copywriter`];

for (const data of app1) {
    // console.log(data);
    if( data === "garmmerly"){
        break
        console.log(data)
    }
    
}

/* MAPS
maps are predefined funtions and hold unique values in key : value pairs. 

-- difference btw object & map is that they display values in same order as input while objects don't.

-- maps are not iterable means loop cannot be appied on maps.
*/
const map = new Map();
map.set("IN" , "INDIA")
map.set("FR" , "FRENCH")
map.set("GEM" , "GERMENY")
map.set("AUS" , "AUSTRALIA")
map.set("USA" , "UNITED STATES OF AMERICA")

// console.log(map);

for (const [key , value] of map ){
    console.log(key , ' :- ' , value)
}