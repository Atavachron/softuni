function calculateClimbersPercentage(input) {
    let groupCount = Number(input[0]);

    let groupArr = new Array(5).fill(0);
    let total = 0;

    for (let i = 1; i <= groupCount; i++) {
        let climbers = Number(input[i]);
        total += climbers;

        if (climbers <= 5) {
            groupArr[0] += climbers;
        } else if (climbers <= 12) {
            groupArr[1] += climbers;
        } else if (climbers <= 25) {
            groupArr[2] += climbers;
        } else if (climbers <= 40) {
            groupArr[3] += climbers;
        } else {
            groupArr[4] += climbers;
        }
    }

    for (let i = 0; i < groupArr.length; i++) {
        console.log(`${((groupArr[i] / total) * 100).toFixed(2)}%`);
    }
}

calculateClimbersPercentage(['5', '25', '41', '31', '250', '6']);
