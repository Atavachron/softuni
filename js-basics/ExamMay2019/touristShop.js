function solve(input) {
    let budget = Number(input[0]);
    let counter = 0;
    let total = 0;

    for (let i = 1; i < input.length; i += 2) {
        if (input[i] === 'Stop') {
            console.log(
                `You bought ${counter} products for ${total.toFixed(2)} leva.`
            );
            break;
        }

        let item = input[i];
        let itemPrice = Number(input[i + 1]);

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
