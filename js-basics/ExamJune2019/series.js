function solve(input) {
    let budget = Number(input[0]);
    let seriesCount = Number(input[1]);

    let total = 0;

    for (let i = 2; i < seriesCount * 2 + 2; i += 2) {
        let series = input[i];
        let price = Number(input[i + 1]);

        switch (series) {
            case 'Thrones':
                price *= 0.5;
                break;
            case 'Lucifer':
                price *= 0.6;
                break;
            case 'Protector':
                price *= 0.7;
                break;
            case 'TotalDrama':
                price *= 0.8;
                break;
            case 'Area':
                price *= 0.9;
                break;
        }
        total += price;
    }

    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(
            `You bought all the series and left with ${diff.toFixed(2)} lv.`
        );
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }
}

solve([
    '25',
    '6',
    'Teen Wolf',
    '8',
    'Protector',
    '5',
    'TotalDrama',
    '5',
    'Area',
    '4',
    'Thrones',
    '5',
    'Lucifer',
    '9',
]);
