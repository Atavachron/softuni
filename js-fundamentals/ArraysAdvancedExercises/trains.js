function fitPassengers(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    for (let el of input) {
        let tokens = el.split(' ');

        if (tokens[0] === 'Add') {
            wagons.push(Number(tokens[1]));
        } else {
            let newPax = Number(tokens[0]);

            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + newPax <= maxCapacity) {
                    wagons[i] += newPax;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

fitPassengers([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75',
]);

fitPassengers(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
