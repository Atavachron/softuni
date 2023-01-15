function buyBitcoin(input) {
    let totalMoney = 0;
    let dayCounter = 0;
    let firstBitcoinDay = 0;
    let firstBitcoinBought = false;

    for (let i = 0; i < input.length; i++) {
        dayCounter++;

        let daysGold = input[i];
        let daysMoney = 0;

        if (dayCounter % 3 === 0) {
            daysMoney = daysGold * 0.7 * 67.51;
        } else {
            daysMoney = daysGold * 67.51;
        }

        totalMoney += daysMoney;

        if (totalMoney >= 11949.16 && !firstBitcoinBought) {
            firstBitcoinDay = dayCounter;
            firstBitcoinBought = true;
        }
    }

    let bitcoinsBought = Math.floor(totalMoney / 11949.16);
    let moneyLeft = totalMoney - bitcoinsBought * 11949.16;

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (firstBitcoinBought) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}

buyBitcoin([100, 200, 300]);
buyBitcoin([50, 100]);
buyBitcoin([3124.15, 504.212, 2511.124]);
