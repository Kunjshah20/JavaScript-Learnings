//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "kunj"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "kunj"
    if (username === "kunj") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// 1. Function declarations are scanned and made available
// 2. Variable declarations are scanned and made undefined

console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5) - gives error
const addTwo = function(num){
    return num + 2
}