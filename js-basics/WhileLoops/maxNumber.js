function getMaxNumber(input) {
    let index = 0;
    let maxNum = Number.NEGATIVE_INFINITY;

    let command = input[index];
    index++;

    while (command !== 'Stop') {
        let currentNum = Number(command);
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }

        command = input[index];
        index++;
    }

    console.log(maxNum);
}

getMaxNumber(['100', '99', '80', '70', 'Stop']);
getMaxNumber(['-10', '20', '-30', 'Stop']);
getMaxNumber(['45', '-20', '7', '99', 'Stop']);
getMaxNumber(['999', 'Stop']);
getMaxNumber(['-1', '-2', 'Stop']);
