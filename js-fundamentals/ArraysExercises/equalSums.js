function equalSums(arr) {
    let equalSumsFound = false;
    let indexFound = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
            console.log(0);
            return;
        }

        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let k = i; k < arr.length - 1; k++) {
            rightSum += arr[k + 1];
        }

        if (leftSum === rightSum) {
            equalSumsFound = true;
            indexFound = i;
        }
    }

    if (equalSumsFound) {
        console.log(indexFound);
    } else {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
