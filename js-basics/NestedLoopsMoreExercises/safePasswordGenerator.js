function generatePassword(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let max = Number(input[2]);

    for (let i = 35; i <= 55; i++) {
        for (let j = 64; j <= 96; j++) {
            for (let k = 1; k <= a; k++) {
                for (let l = 1; l <= b; l++) {
                    console.log(
                        String.fromCharCode(i) +
                            String.fromCharCode(j) +
                            String(k) +
                            String(k) +
                            String.fromCharCode(j) +
                            String.fromCharCode(i)
                    );
                }
            }
        }
    }
}

generatePassword(['2', '3', '10']);
generatePassword(['20', '50', '10']);
