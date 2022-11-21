function printNumbers(input) {
    let target = Number(input[0]);
    let counter = 1;

    while (counter <= target) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

printNumbers(['31']);
