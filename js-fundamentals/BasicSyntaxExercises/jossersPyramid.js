//Note this solution does not give 100% in Judge

function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let rows = 0;

    while (base > 2) {
        rows++;

        if (rows % 5 === 0) {
            lapis += (4 * base - 4) * increment;
        } else {
            marble += (4 * base - 4) * increment;
        }

        stone += (base - 2) * (base - 2) * increment;

        base -= 2;
    }

    gold += base * base;
    rows++;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(rows * increment)}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);
solve(1, 1);
