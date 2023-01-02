function solve(input) {
    let oneLvCount = Number(input[0]);
    let twoLvCount = Number(input[1]);
    let fiveLvCount = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= oneLvCount; i++) {
        for (let j = 0; j <= twoLvCount; j++) {
            for (let k = 0; k <= fiveLvCount; k++) {
                if (i * 1 + j * 2 + k * 5 === sum) {
                    console.log(
                        `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`
                    );
                }
            }
        }
    }
}

solve(['3', '2', '3', '10']);
solve(['5', '3', '1', '7']);
