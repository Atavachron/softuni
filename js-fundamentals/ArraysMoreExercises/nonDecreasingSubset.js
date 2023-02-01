function printNonDecreasingSubset(arr) {
    let biggestNum = arr[0];
    let subset = [];

    for (let num of arr) {
        if (num >= biggestNum) {
            subset.push(num);
            biggestNum = num;
        }
    }

    console.log(subset.join(' '));
}

printNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
printNonDecreasingSubset([1, 2, 3, 4]);
printNonDecreasingSubset([20, 3, 2, 15, 6, 1]);
