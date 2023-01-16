function calculateBill(input) {
    let length = input[0];
    let contract = input[1];
    let internet = input[2];
    let months = Number(input[3]);

    let monthlyFee;

    if (length === 'one') {
        switch (contract) {
            case 'Small':
                monthlyFee = 9.98;
                break;
            case 'Middle':
                monthlyFee = 18.99;
                break;
            case 'Large':
                monthlyFee = 25.98;
                break;
            case 'ExtraLarge':
                monthlyFee = 35.99;
                break;
        }
    } else if (length === 'two') {
        switch (contract) {
            case 'Small':
                monthlyFee = 8.58;
                break;
            case 'Middle':
                monthlyFee = 17.09;
                break;
            case 'Large':
                monthlyFee = 23.59;
                break;
            case 'ExtraLarge':
                monthlyFee = 31.79;
                break;
        }
    }

    if (internet === 'yes') {
        if (monthlyFee <= 10) {
            monthlyFee += 5.5;
        } else if (monthlyFee <= 30) {
            monthlyFee += 4.35;
        } else {
            monthlyFee += 3.85;
        }
    }

    let total = months * monthlyFee;

    if (length === 'two') {
        total *= 0.9625;
    }

    console.log(`${total.toFixed(2)} lv.`);
}

calculateBill(['one', 'Small', 'yes', '10']);
calculateBill(['two', 'Large', 'no', '10']);
