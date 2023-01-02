function solve(input) {
    let hundredsLimit = Number(input[0]);
    let tensLimit = Number(input[1]);
    let onesLimit = Number(input[2]);

    for (let i = 1; i <= hundredsLimit; i++) {
        for (let j = 1; j <= tensLimit; j++) {
            for (let k = 1; k <= onesLimit; k++) {
                if (
                    i % 2 === 0 &&
                    k % 2 === 0 &&
                    (j === 2 || j === 3 || j === 5 || j === 7)
                ) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

solve(['3', '5', '5']);
solve(['8', '2', '8']);
