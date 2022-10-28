function checkIfSufficientMoney(input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuTotal = gpuCount * 250;
    let cpuTotal = gpuTotal * 0.35 * cpuCount;
    let ramTotal = gpuTotal * 0.1 * ramCount;

    let totalExpenses = gpuTotal + cpuTotal + ramTotal;

    if (gpuCount > cpuCount) {
        totalExpenses -= totalExpenses * 0.15;
    }

    let diff = Math.abs(budget - totalExpenses);

    if (budget >= totalExpenses) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}

checkIfSufficientMoney(['920.45', '3', '1', '1']);
