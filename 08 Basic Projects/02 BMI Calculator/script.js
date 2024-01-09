const form = document.querySelector("form")
// this uscase will give empty value in height
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results");

    if(height  === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight  === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${height}`
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
         // show the result
        if (bmi < 18.6) {
            results.innerHTML = `<span>Under weight : ${bmi}</span>`
        } else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span>Normal weight : ${bmi}</span>`
        } else{
            results.innerHTML = `<span>Overweight : ${bmi}</span>`
        }
    }
    
})