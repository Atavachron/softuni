function calculateSteps(input) {
    let index = 0;

    let command = input[index];
    index++;

    let totalSteps = 0;

    while (totalSteps < 10000) {
        if (command === 'Going home') {
            totalSteps += Number(input[index]);
            break;
        }

        totalSteps += Number(command);

        command = input[index];
        index++;
    }

    let diff = Math.abs(10000 - totalSteps);

    if (totalSteps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}

calculateSteps(['1000', '1500', '2000', '6500']);
calculateSteps(['1500', '300', '2500', '3000', 'Going home', '200']);
calculateSteps(['1500', '3000', '250', '1548', '2000', 'Going home', '2000']);
calculateSteps(['125', '250', '4000', '30', '2678', '4682']);
