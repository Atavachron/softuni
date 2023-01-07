function calculateIncome(input) {
    let target = Number(input[0]);
    let total = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'Party!') {
        if (total >= target) {
            console.log('Target acquired.');
            break;
        }

        let cocktail = command;
        command = input[index];
        index++;

        let price = cocktail.length;

        let amount = command;
        command = input[index];
        index++;

        let order = amount * price;
        if (order % 2 !== 0) {
            order *= 0.75;
        }

        total += order;
    }

    if (total < target) {
        console.log(`We need ${(target - total).toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${total.toFixed(2)} leva.`);
}

calculateIncome(['500', 'Bellini', '6', 'Bamboo', '7', 'Party!']);

calculateIncome(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);
