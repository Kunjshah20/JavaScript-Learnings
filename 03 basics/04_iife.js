// Immediately Invoked Function Expressions (IIFE)
// Due to pollution of global scope many times, so to remove global pollution (declarations or variables) we use IIFE & it is used for immediate execution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon is necessary here, remember this

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('kunj');