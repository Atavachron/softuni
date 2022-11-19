function comparePairs(input) {
    let pairsCount = Number(input[0]);

    let lastSum = 0;
    let maxDiff = 0;

    for (let i = 1; i <= pairsCount * 2; i += 2) {
        let a = Number(input[i]);
        let b = Number(input[i + 1]);

        let currentSum = a + b;

        if (i > 1) {
            let diff = Math.abs(currentSum - lastSum);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }

        lastSum = currentSum;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${lastSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

comparePairs(['3', '1', '2', '0', '3', '4', '-1']);
comparePairs(['2', '1', '2', '2', '2']);
comparePairs(['1', '5', '5']);
comparePairs(['4', '1', '1', '3', '1', '2', '2', '0', '0']);
comparePairs(['2', '-1', '0', '0', '-1']);
comparePairs(['2', '-1', '2', '0', '-1']);
