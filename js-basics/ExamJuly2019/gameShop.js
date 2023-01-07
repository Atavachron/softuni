function solve(input) {
    let gamesSold = Number(input[0]);

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= gamesSold; i++) {
        let game = input[i];

        switch (game) {
            case 'Hearthstone':
                hearthstone++;
                break;
            case 'Fornite':
                fornite++;
                break;
            case 'Overwatch':
                overwatch++;
                break;
            default:
                others++;
                break;
        }
    }

    let hearthstonePct = (hearthstone / gamesSold) * 100;
    let fornitePct = (fornite / gamesSold) * 100;
    let overwatchPct = (overwatch / gamesSold) * 100;
    let othersPct = (others / gamesSold) * 100;

    console.log(`Hearthstone - ${hearthstonePct.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePct.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPct.toFixed(2)}%`);
    console.log(`Others - ${othersPct.toFixed(2)}%`);
}

solve(['4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']);
solve(['3', 'Hearthstone', 'Diablo 2', 'Star Craft 2']);
