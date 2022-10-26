function calculate(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddies = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalItems = puzzles + dolls + teddies + minions + trucks;
    let totalSales =
        puzzles * 2.6 + dolls * 3 + teddies * 4.1 + minions * 8.2 + trucks * 2;

    if (totalItems >= 50) {
        totalSales *= 0.75;
    }

    let finalAmount = totalSales - totalSales * 0.1;
    let diff = Math.abs(finalAmount - tripPrice);

    if (finalAmount >= tripPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}

calculate(['40.8', '20', '25', '30', '50', '10']);
