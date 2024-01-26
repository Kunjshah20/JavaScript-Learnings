// generate random color

const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 10)]
    }
    return color;
}

let intervals;

const startChangingColor = () => {

    if(!intervals){ // basically saying that it should not be null
        intervals = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
    console.log("started changing");
}

const stopChangingColor = () => {
    clearInterval(intervals)
    intervals = null; // flushed out the variable because it maintains code sustainibility
    console.log("stopped");
}

document.querySelector("#start").addEventListener("click", startChangingColor)
document.querySelector("#stop").addEventListener("click", stopChangingColor)