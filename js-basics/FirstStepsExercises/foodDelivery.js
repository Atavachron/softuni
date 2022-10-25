//Calculate the total order for food delivery
//A chicken main costs 10.35, a fish main 12.4 and a vegetarian main 8.15
//A dessert will be ordered which will cost 20% of the mains combined
//The delivery fee is 2.5
//The input has the number of chicken, fish and vegetarian mains ordered

function calculateDeliveryCost(input) {
    let chickenMain = Number(input[0]);
    let fishMain = Number(input[1]);
    let vegMain = Number(input[2]);
    let deliveryFee = 2.5;

    //Calculate the cost of all the main dishes
    let totalMainsCost = chickenMain * 10.35 + fishMain * 12.4 + vegMain * 8.15;

    //Calculate dessert which is 20% of the cost of the mains
    let dessertCost = totalMainsCost * 0.2;

    //Calculate the total order by adding the mains, the dessert and the delivery fee
    let totalOrder = totalMainsCost + dessertCost + deliveryFee;

    console.log(totalOrder);
}

calculateDeliveryCost(['2 ', '4 ', '3 ']);
