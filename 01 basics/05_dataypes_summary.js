// Primitive 

// how the data is stored in memory and accessed from memory , upon that there are 2 categories of data types - Primitive & Non Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id);
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "kunj",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
// console.log(typeof outsideTemp); // gives object


// https://262.ecma-international.org/5.1/#sec-11.4.3




// Stack (Primitive) & Heap (Non primitive) Memory
// Stack - value doesn't change
// Heap - values do change

let myName = "Kunj"

let anotherName = myName
anotherName = "new"
console.log(myName, anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ok"
}

let userTwo = userOne
userTwo.email = "new@gmail.com"
console.log(userOne, userTwo);