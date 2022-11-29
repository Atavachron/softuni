function calculatePriceAndPercentage(input) {
    let cargoCount = Number(input[0]);

    let totalCargo = 0;
    let totalPrice = 0;
    let miniBusCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0;

    for (let i = 1; i <= cargoCount; i++) {
        let currentCargo = Number(input[i]);

        totalCargo += currentCargo;

        if (currentCargo <= 3) {
            totalPrice += currentCargo * 200;
            miniBusCargo += currentCargo;
        } else if (currentCargo <= 11) {
            totalPrice += currentCargo * 175;
            truckCargo += currentCargo;
        } else {
            totalPrice += currentCargo * 120;
            trainCargo += currentCargo;
        }
    }

    let averagePricePerTonne = totalPrice / totalCargo;
    console.log(averagePricePerTonne.toFixed(2));

    let miniBusCargoPercentage = (miniBusCargo / totalCargo) * 100;
    let truckCargoPercentage = (truckCargo / totalCargo) * 100;
    let trainCargoPercentage = (trainCargo / totalCargo) * 100;

    console.log(`${miniBusCargoPercentage.toFixed(2)}%`);
    console.log(`${truckCargoPercentage.toFixed(2)}%`);
    console.log(`${trainCargoPercentage.toFixed(2)}%`);
}

calculatePriceAndPercentage(['4', '1', '5', '16', '3']);
