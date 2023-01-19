function findSumAndNumberType(a, b, c) {
    let sum = a + b + c;
    sum % 1 === 0 ? (sum += ' - Integer') : (sum += ' - Float');

    console.log(sum);
}

findSumAndNumberType(9, 100, 1.1);
findSumAndNumberType(100, 200, 303);
