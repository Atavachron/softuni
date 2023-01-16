function solve(input) {
    let budget = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let total = 0;
    let counter = 0;

    while (command !== 'Stop') {
        let item = command;

        command = input[index];
        index++;

        let itemPrice = Number(command);

        counter++;

        if (counter % 3 === 0) {
            itemPrice *= 0.5;
        }

        total += itemPrice;

        if (total > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(total - budget).toFixed(2)} leva!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'Stop') {
        console.log(
            `You bought ${counter} products for ${total.toFixed(2)} leva.`
        );
    }
}

solve([
    '153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglasses',
    '30',
    'Stop',
]);

solve(['54', 'Thermal underwear', '24', 'Sunscreen', '45']);
