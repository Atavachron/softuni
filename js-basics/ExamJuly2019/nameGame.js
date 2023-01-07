function solve(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxScore = 0;
    let winner = '';

    while (command !== 'Stop') {
        let player = command;
        let currentScore = 0;

        for (let i = 0; i < player.length; i++) {
            let letter = player.charAt(i);
            if (letter.charCodeAt(0) === Number(input[index + i])) {
                currentScore += 10;
            } else {
                currentScore += 2;
            }
        }

        if (currentScore >= maxScore) {
            maxScore = currentScore;
            winner = player;
        }

        index += player.length;
        command = input[index];
        index++;
    }

    console.log(`The winner is ${winner} with ${maxScore} points!`);
}

// solve(['Ivan', '73', '20', '98', '110', 'Ivo', '80', '65', '87', 'Stop']);
solve([
    'Pesho',
    '124',
    '34',
    '111',
    '97',
    '99',
    'Gosho',
    '98',
    '124',
    '88',
    '76',
    '18',
    'Stop',
]);
