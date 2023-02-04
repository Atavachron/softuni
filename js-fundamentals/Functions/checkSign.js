//Do not multiply the arguments to find out the answer

function checkSign(numOne, numTwo, numThree) {
    let positiveCount = 0;

    for (let element of arguments) {
        element > 0 ? positiveCount++ : null;
    }

    if (positiveCount === 1 || positiveCount === 3) {
        return 'Positive';
    }

    return 'Negative';
}

console.log(checkSign(-1, -3, -4));
