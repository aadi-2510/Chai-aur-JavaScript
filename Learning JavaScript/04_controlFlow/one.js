 // IF/Else conditions

 const userLoggedIn = true
 const debitCard = true 
 const loggedInFromGoogle = false
 const loggedInFromEmail = false
 const loggedInFromDiscord = true


 if(userLoggedIn && debitCard){
    console.log(`allowed to do purchase`)
 }

 if (loggedInFromEmail || loggedInFromGoogle || loggedInFromDiscord){
    console.log(`welcome to website`)
 }
