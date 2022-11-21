function calculateAverageGrade(input) {
    let index = 0;
    let name = input[index];
    index++;

    let failCount = 0;
    let totalGrade = 0;
    let currentClass = 1;

    while (currentClass <= 12) {
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade < 4) {
            failCount++;
            if (failCount === 2) {
                break;
            }
            continue;
        }

        totalGrade += currentGrade;
        currentClass++;
    }

    let averageGrade = totalGrade / 12;

    if (failCount === 2) {
        console.log(`${name} has been excluded at ${currentClass} grade`);
    } else {
        console.log(
            `${name} graduated. Average grade: ${averageGrade.toFixed(2)}`
        );
    }
}

calculateAverageGrade([
    'Gosho',
    '5',
    '5.5',
    '6',
    '5.43',
    '5.5',
    '6',
    '5.55',
    '5',
    '6',
    '6',
    '5.43',
    '5',
]);

calculateAverageGrade(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3']);
