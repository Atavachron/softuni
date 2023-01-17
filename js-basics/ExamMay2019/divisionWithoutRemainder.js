function solve(input) {
    let numCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i < input.length; i++) {
        let num = Number(input[i]);
        if (num % 2 === 0) {
            p1++;
        }

        if (num % 3 === 0) {
            p2++;
        }

        if (num % 4 === 0) {
            p3++;
        }
    }

    let p1Pct = (p1 / numCount) * 100;
    let p2Pct = (p2 / numCount) * 100;
    let p3Pct = (p3 / numCount) * 100;

    console.log(`${p1Pct.toFixed(2)}%`);
    console.log(`${p2Pct.toFixed(2)}%`);
    console.log(`${p3Pct.toFixed(2)}%`);
}

solve(['10', '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);
solve(['3', '3', '6', '9']);
