function calculate(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalCount =
        puzzleCount + dollCount + teddyBearCount + minionCount + truckCount;

    let totalPuzzlePrice = puzzleCount * 2.6;
    let totalDollPrice = dollCount * 3;
    let totalTeddyBearPrice = teddyBearCount * 4.1;
    let totalMinionPrice = minionCount * 8.2;
    let totalTruckPrice = truckCount * 2;

    let totalPrice =
        totalPuzzlePrice +
        totalDollPrice +
        totalTeddyBearPrice +
        totalMinionPrice +
        totalTruckPrice;

    if (totalCount >= 50) {
        let discount = totalPrice * 0.25;
        totalPrice -= discount;
    }

    let rentPrice = totalPrice * 0.1;
    let finalAmount = totalPrice - rentPrice;

    let diff = Math.abs(finalAmount - tripPrice);

    if (finalAmount >= tripPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}

calculate(['40.8', '20', '25', '30', '50', '10']);
