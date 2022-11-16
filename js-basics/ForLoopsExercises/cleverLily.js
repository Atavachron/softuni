function calculateIfEnough(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let total = 0;
    let moneyToReceive = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            total += moneyToReceive - 1;
            moneyToReceive += 10;
        } else {
            total += toyPrice;
        }
    }

    let diff = Math.abs(total - washingMachinePrice);

    if (total >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

calculateIfEnough(['10', '170.00', '6']);
calculateIfEnough(['21', '1570.98', '3']);
