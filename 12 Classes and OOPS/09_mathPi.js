const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter); // we can't overwrite object values

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name: 'elaichi chai',
    price: 20,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(Math, 'PI', {
//     writable: true,
//     enumerable: true,
// })   // gives error - since JS does not allow everything to change properties of everything

// console.log(descripter);

Object.defineProperty(chai, 'name', {
    writable: false,
    // enumerable: false, // we can stop iteration on object chai by making enumerable as false. Here we stopped iteartion on "name"
    enumerable : true, 
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}