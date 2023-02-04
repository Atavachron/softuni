function checkSign(numOne, numTwo, numThree) {
    let positiveCount = 0;

    if (checkIfPositive(numOne)) {
        positiveCount++;
    }
    if (checkIfPositive(numTwo)) {
        positiveCount++;
    }
    if (checkIfPositive(numThree)) {
        positiveCount++;
    }

    if (positiveCount === 1 || positiveCount === 3) {
        return 'Positive';
    }

    return 'Negative';

    function checkIfPositive(num) {
        return num >= 0;
    }
}
