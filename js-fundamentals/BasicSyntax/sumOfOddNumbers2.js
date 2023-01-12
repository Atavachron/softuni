function sumOddNumbers(num) {
    let sum = 0;

    let a = 1;
    while (num > 0) {
        if (a % 2 !== 0) {
            sum += a;
            num--;
            console.log(a);
        }
        a++;
    }
    console.log(`Sum: ${sum}`);
}

sumOddNumbers(3);
