// this - gives current context 
const user = {
    username: "kunj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log("inner this : ", this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log("outer this : ", this);

// function chai(){
//     let username = "kunj"
//     console.log(this.username); // doesn't work in function declarations
// }

// chai()

// const chai = function () {
//     let username = "kunj"
//     console.log(this.username); // doesn't work in function declarations
// }

const chai = () => {
    let username = "kunj"
    console.log(this); // also doesn't work in variable declarations
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "kunj"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()