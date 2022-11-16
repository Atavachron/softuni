function calculateClimbersPercentage(input) {
    let groupCount = Number(input[0]);

    let totalClimbers = 0;
    let groupMusala = 0;
    let groupMontBlanc = 0;
    let groupKilimanjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    for (let i = 1; i <= groupCount; i++) {
        let climbersCount = Number(input[i]);
        totalClimbers += climbersCount;

        if (climbersCount <= 5) {
            groupMusala += climbersCount;
        } else if (climbersCount <= 12) {
            groupMontBlanc += climbersCount;
        } else if (climbersCount <= 25) {
            groupKilimanjaro += climbersCount;
        } else if (climbersCount <= 40) {
            groupK2 += climbersCount;
        } else {
            groupEverest += climbersCount;
        }
    }

    let groupMusalaPct = (groupMusala / totalClimbers) * 100;
    let groupMontBlancPct = (groupMontBlanc / totalClimbers) * 100;
    let groupKilimanjaroPct = (groupKilimanjaro / totalClimbers) * 100;
    let groupK2Pct = (groupK2 / totalClimbers) * 100;
    let groupEverestPct = (groupEverest / totalClimbers) * 100;

    console.log(`${groupMusalaPct.toFixed(2)}%`);
    console.log(`${groupMontBlancPct.toFixed(2)}%`);
    console.log(`${groupKilimanjaroPct.toFixed(2)}%`);
    console.log(`${groupK2Pct.toFixed(2)}%`);
    console.log(`${groupEverestPct.toFixed(2)}%`);
}

calculateClimbersPercentage(['5', '25', '41', '31', '250', '6']);
