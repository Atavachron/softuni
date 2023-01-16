function calculateTripPrice(input) {
    let fuelPrice = 2.1;
    let guideFee = 100;

    let budget = Number(input[0]);
    let litresFuel = Number(input[1]);
    let day = input[2];

    let total = litresFuel * fuelPrice + guideFee;

    if (day === 'Saturday') {
        total *= 0.9;
    } else if (day === 'Sunday') {
        total *= 0.8;
    }

    let diff = Math.abs(total - budget);

    if (budget >= total) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}

calculateTripPrice([1000, 10, 'Sunday']);
