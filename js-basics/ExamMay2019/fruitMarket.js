function calculateBill(
    strawberryPrice,
    bananas,
    oranges,
    raspberries,
    strawberries
) {
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

calculateBill(48, 10, 3.3, 6.5, 1.7);
