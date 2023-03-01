function sequences(input) {
    // Parse input into array of arrays of numbers
    let parsedInput = input.map(el => JSON.parse(el));

    // Find unique arrays
    let uniqueArrays = [];
    for (let arr of parsedInput) {
        let isUnique = true;
        for (let uniqueArr of uniqueArrays) {
            if (isSameArray(arr, uniqueArr)) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueArrays.push(arr);
        }
    }

    // Sort arrays by length and order of appearance
    uniqueArrays.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        for (let i = 0; i < parsedInput.length; i++) {
            if (isSameArray(a, parsedInput[i])) {
                return -1;
            } else if (isSameArray(b, parsedInput[i])) {
                return 1;
            }
        }
        return 0;
    });

    // Print arrays in descending order
    for (let arr of uniqueArrays) {
        console.log(`[${arr.sort((a, b) => b - a).join(', ')}]`);
    }
}

function isSameArray(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    let aSet = new Set(a);
    for (let num of b) {
        if (!aSet.has(num)) {
            return false;
        }
    }
    return true;
}
sequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',

    '[10, 1, -17, 0, 2, 13]',

    '[4, -3, 3, -2, 2, -1, 1, 0]',
]);
