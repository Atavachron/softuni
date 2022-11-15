function calculateTennisPoints(input) {
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    let earnedPoints = 0;
    let tournamentsWon = 0;

    for (let i = 2; i < input.length; i++) {
        let stage = input[i];

        switch (stage) {
            case 'W':
                earnedPoints += 2000;
                tournamentsWon++;
                break;
            case 'F':
                earnedPoints += 1200;
                break;
            case 'SF':
                earnedPoints += 720;
                break;
        }
    }

    let finalPoints = initialPoints + earnedPoints;
    let averagePoints = earnedPoints / tournamentCount;
    let winningPercentage = (tournamentsWon / tournamentCount) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winningPercentage.toFixed(2)}%`);
}

calculateTennisPoints(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);
