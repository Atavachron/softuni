function solve(input) {
    let team = input[0];
    let games = Number(input[1]);

    if (games === 0) {
        console.log(`${team} hasn't played any games during this season.`);
        return;
    }

    let wins = 0;
    let draws = 0;
    let losses = 0;

    for (let i = 2; i < input.length; i++) {
        let game = input[i];

        if (game === 'W') {
            wins++;
        } else if (game === 'L') {
            losses++;
        } else if (game === 'D') {
            draws++;
        }
    }

    let points = wins * 3 + draws;
    let winRate = (wins / games) * 100;

    console.log(`${team} has won ${points} points during this season.`);
    console.log('Total stats:');
    console.log(`## W: ${wins}`);
    console.log(`## D: ${draws}`);
    console.log(`## L: ${losses}`);
    console.log(`Win rate: ${winRate.toFixed(2)}%`);
}

solve(['Liverpool', '10', 'W', 'D', 'D', 'W', 'L', 'W', 'D', 'D', 'W', 'W']);
solve(['Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D']);
solve(['Chelsea', '0']);
