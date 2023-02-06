function findSmallestNumber(a, b, c) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    let numbersArr = [a, b, c];

    for (let num of numbersArr) {
        smallestNumber = num < smallestNumber ? num : smallestNumber;
    }

    return smallestNumber;
}

console.log(findSmallestNumber(8, 5, 3));
