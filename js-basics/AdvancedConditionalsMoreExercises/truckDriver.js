function calculateIncome(input) {
    let season = input[0];
    let kilometresPerMonth = Number(input[1]);
    let earningsPerKilometre;

    if (kilometresPerMonth <= 5000) {
        switch (season) {
            case 'Spring':
            case 'Autumn':
                earningsPerKilometre = 0.75;
                break;
            case 'Summer':
                earningsPerKilometre = 0.9;
                break;
            case 'Winter':
                earningsPerKilometre = 1.05;
        }
    } else if (kilometresPerMonth <= 10000) {
        switch (season) {
            case 'Spring':
            case 'Autumn':
                earningsPerKilometre = 0.95;
                break;
            case 'Summer':
                earningsPerKilometre = 1.1;
                break;
            case 'Winter':
                earningsPerKilometre = 1.25;
        }
    } else {
        earningsPerKilometre = 1.45;
    }

    let totalEarningsPerMonth = earningsPerKilometre * kilometresPerMonth;
    let totalEarnings = totalEarningsPerMonth * 4;
    totalEarnings *= 0.9;

    console.log(totalEarnings.toFixed(2));
}

calculateIncome(['Summer', '3455']);
calculateIncome(['Winter', '4350']);
calculateIncome(['Spring', '1600']);
