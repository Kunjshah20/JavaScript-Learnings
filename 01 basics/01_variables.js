const accountId = 9203940
let accountEmail = "kunj@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "kunj@gmail.com"
accountPassword = "392018"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])