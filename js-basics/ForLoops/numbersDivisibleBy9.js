function logNumbersDivisibleBy9(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let sum = 0;
    let buff = '';

    for (let i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i;
            buff += i + '\n';
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(buff);
}

logNumbersDivisibleBy9(['100', '200']);
