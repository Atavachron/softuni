function playGame(input) {
    let moves = Number(input[0]);

    let score = 0;
    let from0To9 = 0;
    let from10To19 = 0;
    let from20To29 = 0;
    let from30To39 = 0;
    let from40To50 = 0;
    let invalidNums = 0;

    for (let i = 1; i <= moves; i++) {
        let currentNum = Number(input[i]);

        if (currentNum < 0 || currentNum > 50) {
            score /= 2;
            invalidNums++;
        } else if (currentNum <= 9) {
            score += currentNum * 0.2;
            from0To9++;
        } else if (currentNum <= 19) {
            score += currentNum * 0.3;
            from10To19++;
        } else if (currentNum <= 29) {
            score += currentNum * 0.4;
            from20To29++;
        } else if (currentNum <= 39) {
            score += 50;
            from30To39++;
        } else {
            score += 100;
            from40To50++;
        }
    }

    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${((from0To9 / moves) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((from10To19 / moves) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((from20To29 / moves) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((from30To39 / moves) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((from40To50 / moves) * 100).toFixed(2)}%`);
    console.log(
        `Invalid numbers: ${((invalidNums / moves) * 100).toFixed(2)}%`
    );
}

playGame(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);
