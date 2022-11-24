function getAverageScore(input) {
    let index = 0;
    let problemsSolved = 0;
    let totalScore = 0;
    let poorGrades = 0;
    let currentProblem;
    let needsBreak = false;

    let poorGradesAllowed = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    while (command !== 'Enough') {
        currentProblem = command;
        let currentScore = Number(input[index]);
        index++;

        totalScore += currentScore;
        problemsSolved++;

        if (currentScore <= 4) {
            poorGrades++;
            if (poorGrades === poorGradesAllowed) {
                needsBreak = true;
                break;
            }
        }

        command = input[index];
        index++;
    }

    let averageScore = totalScore / problemsSolved;

    if (!needsBreak) {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsSolved}`);
        console.log(`Last problem: ${currentProblem}`);
    } else {
        console.log(`You need a break, ${poorGradesAllowed} poor grades.`);
    }
}

getAverageScore([
    '3',

    'Money',

    '6',

    'Story',

    '4',

    'Spring Time',

    '5',

    'Bus',

    '6',

    'Enough',
]);

getAverageScore(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4']);
