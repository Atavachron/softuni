function solve(input) {
    let movie = input[0];
    let addOn = input[1];
    let tickets = Number(input[2]);

    let price = 0;

    switch (movie) {
        case 'John Wick':
            switch (addOn) {
                case 'Drink':
                    price = 12;
                    break;
                case 'Popcorn':
                    price = 15;
                    break;
                case 'Menu':
                    price = 19;
                    break;
            }
            break;
        case 'Star Wars':
            switch (addOn) {
                case 'Drink':
                    price = 18;
                    break;
                case 'Popcorn':
                    price = 25;
                    break;
                case 'Menu':
                    price = 30;
                    break;
            }
            break;
        case 'Jumanji':
            switch (addOn) {
                case 'Drink':
                    price = 9;
                    break;
                case 'Popcorn':
                    price = 11;
                    break;
                case 'Menu':
                    price = 14;
                    break;
            }
            break;
    }

    let total = tickets * price;

    if (movie === 'Star Wars' && tickets >= 4) {
        total *= 0.7;
    } else if (movie === 'Jumanji' && tickets === 2) {
        total *= 0.85;
    }

    console.log(`Your bill is ${total.toFixed(2)} leva.`);
}

solve(['John Wick', 'Drink', '6']);
solve(['Star Wars', 'Popcorn', '4']);
solve(['Jumanji', 'Menu', '2']);
