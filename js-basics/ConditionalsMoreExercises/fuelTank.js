function calculateFuel(input) {
    let fuel = input[0];
    let litresInTank = Number(input[1]);

    if (litresInTank >= 25) {
        console.log(`You have enough ${fuel.toLowerCase()}.`);
    } else {
        if (fuel === 'Diesel' || fuel === 'Gas' || fuel === 'Gasoline') {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else {
            console.log('Invalid fuel!');
        }
    }
}

calculateFuel(['Gas', '10']);
