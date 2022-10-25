//Calculate the total expenses (items plus wages) for repainting a room
//The input includes the sq m of protective cover, litres of paint, litres of paint thinner, and hours of work.
//An additional 10% of paint and 2 sq m of cover must be added, plus 0.40 lv for bags.
//The wages for an hour of work are equal to 30% of the total items price

function calculateRepaintingExpenses(input) {
    let cover = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);
    let bags = 0.4;

    //Add additional 10% of paint and two sq m of cover
    paint = paint * 1.1;
    cover += 2;

    //Calculate the total items price
    let itemsPrice = paint * 14.5 + cover * 1.5 + paintThinner * 5 + bags;

    //Calculate wages per hour
    let wagesPerHour = itemsPrice * 0.3;

    //Calculate the total wages
    let totalWages = wagesPerHour * hours;

    //Add total items price and total wages to get total expenses
    let totalExpenses = itemsPrice + totalWages;

    console.log(totalExpenses);
}

calculateRepaintingExpenses(['10 ', '11 ', '4 ', '8 ']);
