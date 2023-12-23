const accountId = 132332
let accountEmail = "histesh@gmail.com"
var accountPassword = "12123"
accountCity = "Jaipur"

accountEmail = "fdn@gmail.com"
accountPassword = "42343"
accountCity = "bangalore"

let accountState

// accountId = 2 // this is not allowed 


/*

prefer not to use var because of issue in block scope 
*/

console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])