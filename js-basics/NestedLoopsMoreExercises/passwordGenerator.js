function solve(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);

    let output = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k < 97 + l; k++) {
                for (let m = 97; m < 97 + l; m++) {
                    for (let p = 1; p <= n; p++) {
                        if (p > i && p > j) {
                            output += `${i}${j}${String.fromCharCode(
                                k
                            )}${String.fromCharCode(m)}${p} `;
                        }
                    }
                }
            }
        }
    }
    console.log(output);
}

solve(['3', '1']);
