function solve(input) {
    let city = input[0];
    let package = input[1];
    let withDiscount = input[2];
    let days = Number(input[3]);

    let total = 0;
    let price = 0;
    let VIPDiscountPercentage = 0;

    if (days > 7) {
        days--;
    } else if (days < 1) {
        console.log('Days must be positive number!');
        return;
    }

    if (city === 'Bansko' || city === 'Borovets') {
        switch (package) {
            case 'withEquipment':
                price = 100;
                VIPDiscountPercentage = 10;
                break;
            case 'noEquipment':
                price = 80;
                VIPDiscountPercentage = 5;
                break;
            default:
                console.log('Invalid input!');
                return;
        }
    } else if (city === 'Burgas' || city === 'Varna') {
        switch (package) {
            case 'withBreakfast':
                price = 130;
                VIPDiscountPercentage = 12;
                break;
            case 'noBreakfast':
                price = 100;
                VIPDiscountPercentage = 7;
                break;
            default:
                console.log('Invalid input!');
                return;
        }
    } else {
        console.log('Invalid input!');
        return;
    }

    if (withDiscount === 'yes') {
        total = price * days;
        total -= (total * VIPDiscountPercentage) / 100;
    } else {
        total = price * days;
    }

    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
}

solve(['Borovets', 'noEquipment', 'yes', '6']);

solve(['Bansko', 'withEquipment', 'no', '2']);

solve(['Varna', 'withBreakfast', 'yes', '5']);

solve(['Burgas', 'noBreakfast', 'no', '4']);

solve(['Varna', 'withBreakfast', 'no', '0']);

solve(['Gabrovo', 'noBreakfast', 'no', '3']);
