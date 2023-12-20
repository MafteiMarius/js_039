//Write a function, outputting a christmas tree of a given height, made of asterisk `*` character.


function tree(height) {
    for(let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

tree(10);

/*
function printChristmasTree(height) {

    if (height <= 0) {
        console.log("Please provide a valid height greater than 0.");
        return;
    }
    console.log("Christmas Tree:");

    for (let i = 1; i <= height; i++) {
        let spaces = "";
        for (let j = 0; j < height - i; j++) {
            spaces += " ";
        }
        let stars = "";
        for (let k = 0; k < 2 * i - 1; k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
}
printChristmasTree(10);
*/