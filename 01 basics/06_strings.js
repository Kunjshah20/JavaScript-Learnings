const name = "kunj"
const num = 50

// console.log(name + num + "value");

console.log(`Hello my name is ${name} and my repo count is ${num}`);

const gameName = new String('kunj-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log("here", anotherString);

const newStringOne = "   Kunj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kunj.com/kunj%20shah"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // gives array