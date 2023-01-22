function findBiggestNumber(a, b, c) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNumber) {
            maxNumber = arguments[i];
        }
    }

    console.log(maxNumber);
}

findBiggestNumber(3, 9, 5);
