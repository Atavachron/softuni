function solve(input) {
    let capacity = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let ticketPrice = 5;
    let income = 0;
    let isFull = false;

    while (command !== 'Movie time!') {
        let currentPeopleCount = Number(command);
        if (currentPeopleCount > capacity) {
            isFull = true;
            break;
        }

        let currentTicketsCost = currentPeopleCount * ticketPrice;

        if (currentPeopleCount % 3 === 0) {
            currentTicketsCost -= 5;
        }

        income += currentTicketsCost;
        capacity -= currentPeopleCount;

        command = input[index];
        index++;
    }

    if (isFull) {
        console.log('The cinema is full.');
    } else {
        console.log(`There are ${capacity} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${income} lv.`);
}

solve(['60', '10', '6', '3', '20', '15', 'Movie time!']);
solve(['50', '15', '10', '10', '15', '5']);
solve([
    '100',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    '10',
    'Movie time!',
]);
