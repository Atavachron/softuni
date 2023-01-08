function solve(input) {
    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let dayCount = Number(input[3]);

    let costPerDay = 0;

    switch (destination) {
        case 'Dubai':
            if (season === 'Winter') {
                costPerDay = 45000;
            } else if (season === 'Summer') {
                costPerDay = 40000;
            }
            break;
        case 'Sofia':
            if (season === 'Winter') {
                costPerDay = 17000;
            } else if (season === 'Summer') {
                costPerDay = 12500;
            }
            break;
        case 'London':
            if (season === 'Winter') {
                costPerDay = 24000;
            } else if (season === 'Summer') {
                costPerDay = 20250;
            }
            break;
    }

    let totalCost = dayCount * costPerDay;

    if (destination === 'Dubai') {
        totalCost *= 0.7;
    } else if (destination === 'Sofia') {
        totalCost *= 1.25;
    }

    let diff = Math.abs(movieBudget - totalCost);

    if (movieBudget >= totalCost) {
        console.log(
            `The budget for the movie is enough! We have ${diff.toFixed(
                2
            )} leva left!`
        );
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}

solve(['400000', 'Sofia', 'Winter', '20']);
solve(['1000000', 'Dubai', 'Summer', '5']);
solve(['200000', 'London', 'Summer', '7']);
