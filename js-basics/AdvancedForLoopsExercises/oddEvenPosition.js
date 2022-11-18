function calculate(input) {
    let nums = Number(input[0]);
    let oddSum = 0,
        evenSum = 0,
        oddMin = Number.POSITIVE_INFINITY,
        oddMax = Number.NEGATIVE_INFINITY,
        evenMin = Number.POSITIVE_INFINITY,
        evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= nums; i++) {
        let currentNum = Number(input[i]);
        if (i % 2 !== 0) {
            oddSum += currentNum;
            if (currentNum < oddMin) {
                oddMin = currentNum;
            }

            if (currentNum > oddMax) {
                oddMax = currentNum;
            }
        } else {
            evenSum += currentNum;
            if (currentNum < evenMin) {
                evenMin = currentNum;
            }

            if (currentNum > evenMax) {
                evenMax = currentNum;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddMin === Infinity) {
        console.log(`OddMin=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }

    if (oddMax === -Infinity) {
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (evenMin === Infinity) {
        console.log(`EvenMin=No,`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }

    if (evenMax === -Infinity) {
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}

// calculate([6, 2, 3, 5, 4, 2, 1]);
calculate([1, -5]);
