function calculateBill(input) {
    let strawberryPrice = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice * 0.6;
    let bananaPrice = raspberryPrice * 0.2;

    let total =
        strawberries * strawberryPrice +
        bananas * bananaPrice +
        oranges * orangePrice +
        raspberries * raspberryPrice;

    console.log(total.toFixed(2));
}

calculateBill(['48', '10', '3.3', '6.5', '1.7']);
