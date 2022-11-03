function calculateTripExpenses(input) {
    let days = Number(input[0]);
    let accommodation = input[1];
    let rating = input[2];

    let totalPrice = 0;
    let nights = days - 1;

    switch (accommodation) {
        case 'room for one person':
            totalPrice = 18 * nights;
            break;

        case 'apartment':
            totalPrice = 25 * nights;
            if (nights < 10) {
                totalPrice *= 0.7;
            } else if (nights <= 15) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.5;
            }
            break;

        case 'president apartment':
            totalPrice = 35 * nights;
            if (days < 10) {
                totalPrice *= 0.9;
            } else if (days <= 15) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.8;
            }
            break;
    }

    if (rating === 'positive') {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9;
    }

    console.log(totalPrice.toFixed(2));
}

calculateTripExpenses(['14', 'apartment', 'positive']);
calculateTripExpenses(['30', 'president apartment', 'negative']);
