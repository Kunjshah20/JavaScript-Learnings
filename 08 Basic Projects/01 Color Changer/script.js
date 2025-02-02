const buttons = document.querySelectorAll(".button");
// console.log(buttons); // gives nodeList
const body = document.querySelector(".body");

buttons.forEach( (button) => {
    // console.log(button);
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);

        // solution
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'purple'){
        //     body.style.backgroundColor = e.target.id
        // }

        // some better approach
        body.style.backgroundColor = e.target.id;
    })
})