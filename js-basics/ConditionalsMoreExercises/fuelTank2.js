function calculateFuelCost(input) {
    let fuel = input[0];
    let litres = Number(input[1]);
    let discount = input[2];
    let pricePerLitre = 0;

    if (discount === 'No') {
        switch (fuel) {
            case 'Gasoline':
                pricePerLitre = 2.22;
                break;
            case 'Diesel':
                pricePerLitre = 2.33;
                break;
            case 'Gas':
                pricePerLitre = 0.93;
                break;
        }
    } else if (discount === 'Yes') {
        switch (fuel) {
            case 'Gasoline':
                pricePerLitre = 2.22 - 0.18;
                break;
            case 'Diesel':
                pricePerLitre = 2.33 - 0.12;
                break;
            case 'Gas':
                pricePerLitre = 0.93 - 0.08;
                break;
        }
    }

    let fuelCost = litres * pricePerLitre;

    //Apply discounts
    if (litres > 25) {
        fuelCost *= 0.9;
    } else if (litres >= 20) {
        fuelCost *= 0.92;
    }

    console.log(`${fuelCost.toFixed(2)} lv.`);
}

calculateFuelCost(['Gas', '30', 'Yes']);
