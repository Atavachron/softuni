function calculateBouqetPrice(input) {
    let chrysanthemumCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let chrysanthemumPrice;
    let rosePrice;
    let tulipPrice;

    let totalCount = chrysanthemumCount + roseCount + tulipCount;

    switch (season) {
        case 'Spring':
        case 'Summer':
            chrysanthemumPrice = 2;
            rosePrice = 4.1;
            tulipPrice = 2.5;
            break;
        case 'Autumn':
        case 'Winter':
            chrysanthemumPrice = 3.75;
            rosePrice = 4.5;
            tulipPrice = 4.15;
            break;
    }

    let totalPrice =
        chrysanthemumCount * chrysanthemumPrice +
        roseCount * rosePrice +
        tulipCount * tulipPrice;

    if (isHoliday === 'Y') {
        totalPrice *= 1.15;
    }

    if (season === 'Spring' && tulipCount > 7) {
        totalPrice *= 0.95;
    } else if (season === 'Winter' && roseCount >= 10) {
        totalPrice *= 0.9;
    }

    if (totalCount > 20) {
        totalPrice *= 0.8;
    }

    let finalPrice = totalPrice + 2;

    console.log(finalPrice.toFixed(2));
}

calculateBouqetPrice(['2', '4', '8', 'Spring', 'Y']);
calculateBouqetPrice(['3', '10', '9', 'Winter', 'N']);
