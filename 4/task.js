//Using loops (`for` or `while`), write a function, printing numbers from a to b, divisible by c.

function printNumbers (a, b, c) {
    if (a > b) {
        console.log('Bad Input');
        return;
    }
    for (let i = a; i <= b; i++) {
        if (i%c === 0){
            console.log(i);
        }
    }
}
printNumbers(30, 10, 3);