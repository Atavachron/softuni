function solve(input) {
    let index = 0;
    let juryCount = input[index];
    index++;
    let command = input[index];
    index++;

    let totalScore = 0;
    let assessmentCount = 0;

    while (command !== 'Finish') {
        let presentation = command;
        command = input[index];
        index++;

        let presentationTotal = 0;

        for (let i = 0; i < juryCount; i++) {
            presentationTotal += Number(command);
            totalScore += Number(command);
            assessmentCount++;
            command = input[index];
            index++;
        }

        let presentationAverage = presentationTotal / juryCount;
        console.log(`${presentation} - ${presentationAverage.toFixed(2)}.`);
    }

    let finalAssessment = totalScore / assessmentCount;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}

solve([
    '2',

    'While-Loop',

    '6.00',

    '5.50',

    'For-Loop',

    '5.84',

    '5.66',

    'Finish',
]);
