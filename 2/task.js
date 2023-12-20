// Write a program that will output numbers from 10 to 20.
// Do it using `for`, `while` and `do while` loops.

// Modify your code, so that your program will output only even numbers.

// Modify your code again, so that it becomes a function with two arguments, determining range of numbers to output (from a to b).
function numbers(a, b) {}

//function call
numbers(100, 110);
/////////////////////////////


// for(let i = 10; i <= 20; i++) {
    // console.log(i);
// }
//////////////

// let i = 10; 

// while(i <= 20) {
//     console.log(i)
//     i++;

// }
///////////////

// let i= 10;

// do {
//     if(i % 2 === 0) {console.log(i);}
//     i++;
// } while (i <= 100)


function range(a, b) {
    for (let i = a; i <= b; i++){
        console.log(i);
    }
}

range(100, 110);