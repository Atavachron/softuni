function solve(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let total = 0;

    for (let i = 1; i <= days; i++) {
        let dailyFee = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                total += 2.5;
                dailyFee += 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                total += 1.25;
                dailyFee += 1.25;
            } else {
                total += 1;
                dailyFee += 1;
            }
        }
        console.log(`Day: ${i} - ${dailyFee.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

solve(['2', '5']);
solve(['5', '2']);
