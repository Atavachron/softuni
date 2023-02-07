function validatePoints(input) {
    let [x1, y1, x2, y2] = input;

    let output = '';

    if (checkIfDistanceIsValid(calculateDistance(x1, y1, 0, 0))) {
        output += `{${x1}, ${y1}} to {0, 0} is valid\n`;
    } else {
        output += `{${x1}, ${y1}} to {0, 0} is invalid\n`;
    }

    if (checkIfDistanceIsValid(calculateDistance(x2, y2, 0, 0))) {
        output += `{${x2}, ${y2}} to {0, 0} is valid\n`;
    } else {
        output += `{${x2}, ${y2}} to {0, 0} is invalid\n`;
    }

    if (checkIfDistanceIsValid(calculateDistance(x1, y1, x2, y2))) {
        output += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid\n`;
    } else {
        output += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid\n`;
    }

    return output;

    function checkIfDistanceIsValid(num) {
        return Number.isInteger(num);
    }

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

console.log(validatePoints([3, 0, 0, 4]));
