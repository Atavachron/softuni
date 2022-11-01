//Prints titles based on sex and age

function printTitle(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (sex === 'f') {
        if (age < 16) {
            console.log('Miss');
        } else {
            console.log('Ms.');
        }
    } else if (sex === 'm') {
        if (age < 16) {
            console.log('Master');
        } else {
            console.log('Mr.');
        }
    }
}

printTitle(['12', 'f']);
printTitle(['17', 'm']);
printTitle(['25', 'f']);
printTitle(['13.5', 'm']);
