//write a function outputing a christmas tree by night
/*
function tree(height) {
    for(let i = 1; i <= height; i++) {
        let spaces = '*'.repeat(height - i);
        let stars = ' '.repeat(2 * i - 1);
        console.log(stars + spaces);
    }
}

tree(-100);
*/

function tree(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(2 * i - 1);
        //let stars1 = '*'.repeat(height - i + 10);
        let stars2 = '*'.repeat(height - i);
        console.log(stars2 + spaces + stars2);
    }
}

tree(15);