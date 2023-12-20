// Create an array, containing 10 numbers.
let numbers = [2, 5, 12, 15 ,16 , 17, 20, 60, 79, 123];

// Remove the last element from the array and log it in console.
// console.log(numbers);
// const lastElement = numbers.pop();
// console.log(numbers);

// console.log(`lastElement:  ${lastElement}`)

// Add a new element to the end of the array.
// console.log(numbers);
// numbers.push(124);
// console.log(numbers);

// Change the value of the array's second element to zero.
// console.log(numbers);

// numbers[1] = 0;
// console.log(numbers);



// Change the value of every third array's element to one.
console.log(numbers);

for(let i = 2; i < numbers.length; i+= 3) {
    numbers[i] = 1;
}

console.log(numbers);


