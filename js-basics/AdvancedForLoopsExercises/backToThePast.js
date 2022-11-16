function solve(input) {
    let total = Number(input[0]);
    let finalYear = Number(input[1]);
    let age = 18;

    for (let i = 1800; i <= finalYear; i++) {
        if (i % 2 === 0) {
            total -= 12000;
        } else {
            total -= 12000 + 50 * age;
        }
        age++;
    }

    if (total >= 0) {
        console.log(
            `Yes! He will live a carefree life and will have ${total.toFixed(
                2
            )} dollars left.`
        );
    } else {
        console.log(
            `He will need ${Math.abs(total).toFixed(2)} dollars to survive.`
        );
    }
}

solve(['50000', '1802']);
solve(['100000.15', '1808']);
