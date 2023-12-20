//Write a function that will output a multiplication table with the size of a given argument.

let x;
let number = 5;

function table(number) {
for (let i = 1; i <= 10; i++) {
    x = number + '*' +i + '=' + number * i;
    console.log(x);
    }
}

table(3);