function solve(input) {
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let price;
    let total = 0;

    for (let i = 1; i <= days; i++) {
        let totalPerDay = 0;
        for (let j = 1; j <= hoursPerDay; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                totalPerDay += 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                totalPerDay += 1.25;
            } else {
                totalPerDay += 1;
            }
        }

        total += totalPerDay;
        console.log(`Day: ${i} - ${totalPerDay.toFixed(2)} leva`);
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}

solve(['2', '5']);
solve(['5', '2']);
