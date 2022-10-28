function calculateMovieExpenses(input) {
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let clothingExpense = Number(input[2]);

    let decorExpenses = budget * 0.1;
    let totalClothingExpenses = extrasCount * clothingExpense;

    if (extrasCount > 150) {
        totalClothingExpenses *= 0.9;
    }

    let totalMovieExpenses = decorExpenses + totalClothingExpenses;
    let diff = Math.abs(budget - totalMovieExpenses);

    if (budget < totalMovieExpenses) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(
            `Wingard starts filming with ${diff.toFixed(2)} leva left.`
        );
    }
}

calculateMovieExpenses(['20000', '120', '55.5']);
calculateMovieExpenses(['15437.62', '186', '57.99']);
