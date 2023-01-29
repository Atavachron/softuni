function findMagicSumPairs(arr, magicNumber) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === magicNumber) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

findMagicSumPairs([1, 7, 6, 2, 19, 23], 8);
findMagicSumPairs([14, 20, 60, 13, 7, 19, 8], 27);
findMagicSumPairs([1, 2, 3, 4, 5, 6], 6);
