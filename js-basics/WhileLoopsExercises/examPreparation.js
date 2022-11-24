function getAverageScore(input) {
    let index = 0;
    let problemsSolved = 0;
    let totalScore = 0;
    let poorGrades = 0;

    let poorGradesAllowed = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    while (command !== 'Enough') {
        if (poorGradesAllowed === poorGrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
        }
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
