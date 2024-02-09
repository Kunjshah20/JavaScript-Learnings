// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

const formattedDate = myDate.toJSON().slice(0,10).split('-').reverse().join('-'); 
console.log(formattedDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("04-17-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // returns the number of milliseconds since January 1, 1970.
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // returns the day of the week for this date according to local time, where 0 represents Sunday

// `${newDate.getDay()} and the time `


console.log(newDate.toLocaleString('default', {
    // weekday: "long",
    dateStyle: "short", 
    // explore more options bt clicking Ctrl + Space
}).replaceAll("/", "."));