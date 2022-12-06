function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let result = '';

    for (let i = a; i <= b; i++) {
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < String(i).length; j++) {
            if (j % 2 === 0) {
                oddSum += Number(String(i)[j]);
            } else {
                evenSum += Number(String(i)[j]);
            }
        }

        if (oddSum === evenSum) {
            result += i + ' ';
        }
    }

    console.log(result);
}

solve(['100000', '100050']);
solve(['100115', '100120']);
