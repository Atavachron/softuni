function sumOddNumbers(num) {
    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (counter === num) {
            break;
        }

        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            counter++;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOddNumbers(3);
