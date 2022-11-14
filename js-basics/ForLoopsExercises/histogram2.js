function calculatePercentages(input) {
    let numCount = Number(input[0]);
    let numArray = [0, 0, 0, 0, 0];

    for (let i = 1; i < input.length; i++) {
        let num = Number(input[i]);
        if (num < 200) {
            numArray[0]++;
        } else if (num < 400) {
            numArray[1]++;
        } else if (num < 600) {
            numArray[2]++;
        } else if (num < 800) {
            numArray[3]++;
        } else {
            numArray[4]++;
        }
    }

    for (let i = 0; i < numArray.length; i++) {
        let pct = (numArray[i] / numCount) * 100;
        console.log(`${pct.toFixed(2)}%`);
    }
}

calculatePercentages(['3', '1', '2', '999']);
