function calculateAccountBalance(input) {
    let index = 0;

    let command = input[index];
    index++;

    let total = 0;

    while (command !== 'NoMoreMoney') {
        let sum = Number(command);
        if (sum < 0) {
            console.log('Invalid operation!');
            break;
        }

        total += sum;
        console.log(`Increase: ${sum.toFixed(2)}`);

        command = input[index];
        index++;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

calculateAccountBalance(['5.51', '69.42', '100', 'NoMoreMoney']);
calculateAccountBalance(['120', '45.55', '-150']);
