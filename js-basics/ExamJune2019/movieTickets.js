function solve(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1; i <= a2 - 1; i++) {
        for (let j = 1; j <= n - 1; j++) {
            for (let k = 1; k <= n / 2 - 1; k++) {
                let l = i;
                if (i % 2 !== 0 && (j + k + l) % 2 !== 0) {
                    console.log(`${String.fromCharCode(i)}-${j}${k}${l}`);
                }
            }
        }
    }
}

// solve(['86', '88', '4']);
solve(['71', '74', '6']);
