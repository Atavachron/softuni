function solve(input) {
    let drink = input[0];
    let sugar = input[1];
    let count = Number(input[2]);

    let price = 0;
    let total = 0;

    if (drink === 'Espresso') {
        switch (sugar) {
            case 'Without':
                price = 0.9;
                break;
            case 'Normal':
                price = 1;
                break;
            case 'Extra':
                price = 1.2;
                break;
        }
    } else if (drink === 'Cappuccino') {
        switch (sugar) {
            case 'Without':
                price = 1;
                break;
            case 'Normal':
                price = 1.2;
                break;
            case 'Extra':
                price = 1.6;
                break;
        }
    } else if (drink === 'Tea') {
        switch (sugar) {
            case 'Without':
                price = 0.5;
                break;
            case 'Normal':
                price = 0.6;
                break;
            case 'Extra':
                price = 0.7;
                break;
        }
    }

    total = count * price;

    if (sugar === 'Without') {
        total *= 0.65;
    }

    if (drink === 'Espresso' && count >= 5) {
        total *= 0.75;
    }

    if (total > 15) {
        total *= 0.8;
    }

    console.log(
        `You bought ${count} cups of ${drink} for ${total.toFixed(2)} lv.`
    );
}

solve(['Espresso', 'Without', '10']);
solve(['Cappuccino', 'Normal', '13']);
solve(['Tea', 'Extra', '3']);
