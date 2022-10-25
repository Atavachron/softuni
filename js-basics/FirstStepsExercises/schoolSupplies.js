//Calculate total expenses for the purchae of pens, markers and cleaning solution
//A discount is also applied on the final amount
//The input has the number of pens, markers, liquid solution in litres and discount.
//The fixed price is 5.8 for pens, 7.2 for markers and 1.2 for cleaning solution

function calculateExpenses(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningSolution = Number(input[2]);
    let discount = Number(input[3]);

    //Calculate total expenses for each items
    let penExpenses = pens * 5.8;
    let markerExpenses = markers * 7.2;
    let cleaningSolutionExpenses = cleaningSolution * 1.2;

    //Calculate total expenses for the three categories of items
    let totalBeforeDiscount =
        penExpenses + markerExpenses + cleaningSolutionExpenses;

    //Calculate the final amount after giving the discount
    let totalAfterDiscount =
        totalBeforeDiscount - (totalBeforeDiscount * discount) / 100;

    console.log(totalAfterDiscount);
}

calculateExpenses(['2 ', '3 ', '4 ', '25 ']);
