function logAverageNumber(input) {
    let numCount = Number(input[0]);
    let total = 0;
    for (let i = 1; i <= numCount; i++) {
        let num = Number(input[i]);
        total += num;
    }

    console.log((total / numCount).toFixed(2));
}

logAverageNumber(['4', '3', '2', '4', '2']);
