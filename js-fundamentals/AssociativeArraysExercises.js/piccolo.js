function piccolo(input) {
    let result = new Set();

    for (let entry of input) {
        let [command, number] = entry.split(',');

        if (command === 'IN') {
            result.add(number);
        } else if (command === 'OUT') {
            result.delete(number);
        }
    }

    if (result.size === 0) {
        console.log('Parking lot is empty');
    } else {
        let orderedArr = Array.from(result).sort((a, b) => a.localeCompare(b));
        orderedArr.forEach(num => console.log(num));
    }
}

piccolo([
    'IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU',
]);

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
