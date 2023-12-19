// singleton - if we declare literals, singletons are not created
// Object.create

// object literals

const mySymbol = Symbol("key1")


const JsUser = {
    name: "Kunj",
    "full name": "Kunj Shah",
    [mySymbol]: "mykey1", // don't simply write [mySymbol] = "mykey1" because it's data type will be string
    age: 18,
    location: "Mumbai",
    email: "kunj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySymbol])

JsUser.email = "kunj@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "kunj@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());