//Write a function which will count surface area of a given shape (triangle, rectangle, trapezoid), using `switch`.

function shape(shape, ...args) {
    const shapeName = shape.toLowerCase()
    let area;
    switch (shapeName) {
        case 'square':
        
            const [side] = args;

            area = side * side;
            console.log(`Area Of Square: ${area}`);
            break;

        case 'circle':

            const [radius] = args;

            area = Math.round (3.14 * radius * radius);
            console.log(`Area Of Circle: ${area}`);
            break;

        case 'triangle':

            const [base, height] = args;

            area = Math.round (base * height / 2);
            console.log(`Area Of Triangle: ${area}`);
            break;

        case 'trapezoid':

            const [base1, base2, height1] = args;

            area = Math.round (0.5 * (base1 + base2) * height1);
            console.log(`Area Of Trapezoid: ${area}`);
            break;
    
        default: console.log('Invalid shape, supported shapes: Square, Circle, Triangle and Trapezoid!');
        break;
    }
}

shape ('Trapezoid', 4, 6, 6);

// const obj1 = {name: 'Marius'};
// const obj2 = {...obj1}

// obj2.name = 'Dragos';

// console.log(obj2);
// console.log(obj1);