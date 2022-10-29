function buyFish(input) {
    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoWeight = Number(input[2]);
    let scadWeight = Number(input[3]);
    let musselsWeight = Number(input[4]);

    let bonitoPrice = mackerelPrice * 1.6;
    let scadPrice = spratPrice * 1.8;
    let musselsPrice = 7.5;

    let bonitoCost = bonitoPrice * bonitoWeight;
    let scadCost = scadPrice * scadWeight;
    let musselsCost = musselsPrice * musselsWeight;

    let totalCost = bonitoCost + scadCost + musselsCost;
    console.log(totalCost.toFixed(2));
}

buyFish(['6.9', '4.2', '1.5', '2.5', '1']);
