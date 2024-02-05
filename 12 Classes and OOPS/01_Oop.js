const user = {
    username : "kunj",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; // if we don't return "this", then also it will return "this" only implicitly
}

const userOne = new User("kunj", 12, true);
const userTwo = new User("Kunzzz", 11, false);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);