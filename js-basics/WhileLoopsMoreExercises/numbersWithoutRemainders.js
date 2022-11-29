//Log all numbers between 1 and 100 that leave no remainder when divided by 3

function logNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

logNumbers();
