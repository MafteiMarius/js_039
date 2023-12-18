//write a function that returns the sum of 3 numbers
function sum (a, b, c) {

    if (typeof a === "string" || typeof b === "string" || typeof c === "string") {
        console.log ("Please input number");
        return;
    } 
    const sum = a+b+c;
    return sum;
}

console.log (sum(1, 2, "3"));

