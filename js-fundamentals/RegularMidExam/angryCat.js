function angryCat(priceRatings, entryPoint, type) {
    let leftRange = priceRatings.slice(0, entryPoint);
    let rightRange = priceRatings.slice(entryPoint + 1);

    let entryPointItem = priceRatings[entryPoint];

    if (type === 'cheap') {
        leftRange = filterCheaper(leftRange, entryPointItem);
        rightRange = filterCheaper(rightRange, entryPointItem);
    } else if (type === 'expensive') {
        leftRange = filterExpensive(leftRange, entryPointItem);
        rightRange = filterExpensive(rightRange, entryPointItem);
    }

    let leftSum = leftRange.reduce((a, b) => a + b, 0);
    let rightSum = rightRange.reduce((a, b) => a + b, 0);

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }

    function filterCheaper(arr, limit) {
        return arr.filter(el => el < limit);
    }

    function filterExpensive(arr, limit) {
        return arr.filter(el => el >= limit);
    }
}

angryCat([1, 5, 1], 1, 'cheap');
console.log('---');
angryCat([5, 10, 12, 5, 4, 20], 3, 'cheap');
console.log('---');
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, 'expensive');
