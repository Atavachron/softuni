function solve(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingCost = Number(input[2]);

    let decor = budget * 0.1;
    let extrasClothing = extras * clothingCost;

    if (extras > 150) {
        extrasClothing *= 0.9;
    }

    let total = decor + extrasClothing;
    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log('Action!');
        console.log(
            `Wingard starts filming with ${diff.toFixed(2)} leva left.`
        );
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}

solve(['20000', '120', '55.5']);
solve(['15437.62', '186', '57.99']);
solve(['9587.88', '222', '55.68']);
