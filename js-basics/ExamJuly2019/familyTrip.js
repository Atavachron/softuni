function solve(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let additionalExpensesPercentage = Number(input[3]);

    if (nights > 7) {
        pricePerNight *= 0.95;
    }

    let accommodationExpenses = nights * pricePerNight;
    let additionalExpenses = (budget * additionalExpensesPercentage) / 100;
    let totalExpenses = accommodationExpenses + additionalExpenses;

    let diff = Math.abs(budget - totalExpenses);

    if (totalExpenses > budget) {
        console.log(`${diff.toFixed(2)} leva needed.`);
    } else {
        console.log(
            `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
        );
    }
}

solve(['800.5', '8', '100', '2']);
solve(['500', '7', '66', '15']);
