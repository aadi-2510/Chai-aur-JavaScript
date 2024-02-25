const accountID = "443321"
let accountName = "Devesh"
let accountEmail = "nYsBw@example.com"
var accountPassword = "123456"


/* varable name can also be defined without even using const or let keyword, 
check out its value in console though typeof command*/

// Comment shortcut command + / 

/* Prefer not to use var keyword 
becasuse of issue with block scope and functional scope
*/

// accountID = 23233 // not allowed to change once assigned

accountEmail = "xyz@gmail.com"
accountName = "Devesh Sharma"
accountCity = "Pune"

console.table([accountID,accountName,accountEmail,accountPassword,accountCity])

console.log(typeof accountName)
 