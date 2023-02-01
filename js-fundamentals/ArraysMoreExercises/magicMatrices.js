function checkIfMatrixIsMagical(arr) {
    let sum = 0;

    for (let i = 0; i < arr[0].length; i++) {
        sum += arr[0][i];
    }

    let isMagic = true;

    for (let i = 0; i < arr.length; i++) {
        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < arr.length; j++) {
            rowSum += arr[i][j];
        }

        for (let k = 0; k < arr.length; k++) {
            colSum += arr[k][i];
        }

        if (rowSum !== sum || colSum !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

checkIfMatrixIsMagical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);

checkIfMatrixIsMagical([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);

checkIfMatrixIsMagical([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
