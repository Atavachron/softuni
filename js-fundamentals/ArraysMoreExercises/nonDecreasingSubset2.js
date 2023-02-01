function printNonDecreasingSubset(arr) {
    let biggestNum = arr[0];

    let newArr = arr.filter(num => {
        if (num >= biggestNum) {
            biggestNum = num;
        }

        return num >= biggestNum;
    });

    console.log(newArr.join(' '));
}

printNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
printNonDecreasingSubset([1, 2, 3, 4]);
printNonDecreasingSubset([20, 3, 2, 15, 6, 1]);
