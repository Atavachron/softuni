function calculateAmount(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;

    let availableMoney = Number(input[index]);
    index++;

    let total = availableMoney;

    let command = input[index];
    index++;

    let spendDaysCount = 0;
    let totalDaysCount = 0;

    while (total < moneyNeeded) {
        totalDaysCount++;

        if (command === 'spend') {
            spendDaysCount++;
            total -= Number(input[index]);

            if (total < 0) total = 0;
            index++;

            if (spendDaysCount >= 5) {
                console.log("You can't save the money.");
                console.log(`${totalDaysCount}`);
                break;
            }
        } else if (command === 'save') {
            spendDaysCount = 0;
            total += Number(input[index]);
            index++;
        }

        command = input[index];
        index++;
    }

    if (total >= moneyNeeded) {
        console.log(`You saved the money for ${totalDaysCount} days.`);
    }
}

// calculateAmount(['2000', '1000', 'spend', '1200', 'save', '2000']);

calculateAmount([
    '250',
    '150',
    'spend',
    '50',
    'spend',
    '50',
    'save',
    '100',
    'save',
    '100',
]);
