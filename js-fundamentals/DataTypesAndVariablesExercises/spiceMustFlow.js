function calculateSpice(yield) {
    let totalSpice = 0;
    let dayCount = 0;

    while (yield >= 100) {
        dayCount++;
        totalSpice += yield;
        yield -= 10;
        totalSpice -= 26;
    }

    if (yield < 100) {
        totalSpice -= 26;
    }

    if (totalSpice < 0) {
        totalSpice = 0;
    }

    console.log(dayCount);
    console.log(totalSpice);
}

calculateSpice(111);
calculateSpice(450);
