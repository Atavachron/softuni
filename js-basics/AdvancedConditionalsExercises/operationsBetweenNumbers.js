function runOperation(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operator = input[2];

    switch (operator) {
        case '+':
            result = a + b;
            if (result % 2 === 0) {
                console.log(`${a} + ${b} = ${result} - even`);
            } else {
                console.log(`${a} + ${b} = ${result} - odd`);
            }
            break;
        case '-':
            result = a - b;
            if (result % 2 === 0) {
                console.log(`${a} - ${b} = ${result} - even`);
            } else {
                console.log(`${a} - ${b} = ${result} - odd`);
            }
            break;
        case '*':
            result = a * b;
            if (result % 2 === 0) {
                console.log(`${a} * ${b} = ${result} - even`);
            } else {
                console.log(`${a} * ${b} = ${result} - odd`);
            }
            break;
        case '/':
            result = a / b;
            if (b === 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                result = a / b;
                console.log(`${a} / ${b} = ${result.toFixed(2)}`);
            }
            break;
        case '%':
            result = a % b;
            if (b === 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                console.log(`${a} % ${b} = ${result}`);
                break;
            }
    }
}

runOperation(['10', '12', '+']);
runOperation(['123', '12', '/']);
runOperation(['112', '0', '/']);
runOperation(['10', '1', '-']);
runOperation(['10', '3', '%']);
runOperation(['10', '0', '%']);
runOperation(['7', '3', '*']);
