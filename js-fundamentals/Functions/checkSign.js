//Do not multiply the arguments to find out the answer

function checkSign(...arguments) {
    let positiveCount = 0;

    for (let element of arguments) {
        element > 0 ? positiveCount++ : null;
    }

    if (arguments.length % 2 === 0) {
        if (positiveCount % 2 === 0) {
            return 'Positive';
        }
    } else {
        if (positiveCount % 2 !== 0) {
            return 'Positive';
        }
    }

    return 'Negative';
}

console.log(checkSign(-1, -3, -4, -4, 6, 9, -4));
