// Calculate the amount needed to add greenery to a specified area.
// The price is 7.61 per square meter.
// There is also an 18 pct discount on the amount.

function calculatePrice(input) {
    //Get area from input and convert to number
    let area = Number(input[0]);

    //Find price before discount by multiplying area by the respective price
    let priceBeforeDiscount = area * 7.61;

    //Calculate the discount amount
    let discount = priceBeforeDiscount * 0.18;

    //Calculate price after discount
    let finalPrice = priceBeforeDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculatePrice(['550']);
calculatePrice(['150']);
