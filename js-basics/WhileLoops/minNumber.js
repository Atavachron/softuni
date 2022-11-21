function getMinNumber(input) {
    let index = 0;
    let minNum = Number.MAX_SAFE_INTEGER;

    let command = input[index];
    index++;

    while (command !== 'Stop') {
        let currentNum = Number(command);
        if (currentNum < minNum) {
            minNum = currentNum;
        }

        command = input[index];
        index++;
    }

    console.log(minNum);
}

getMinNumber(['100', '99', '80', '70', 'Stop']);
getMinNumber(['-10', '20', '-30', 'Stop']);
getMinNumber(['45', '-20', '7', '99', 'Stop']);
getMinNumber(['-1', '-2', 'Stop']);
