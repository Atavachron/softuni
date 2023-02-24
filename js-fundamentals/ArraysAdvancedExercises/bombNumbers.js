function bombNumbers(seq, bomb) {
    let [bombNum, bombPower] = bomb;

    while (seq.includes(bombNum)) {
        seq.splice(
            Math.max(0, seq.indexOf(bombNum) - bombPower),
            bombPower * 2 + 1
        );
    }

    let result = seq.reduce((a, b) => a + b, 0);

    console.log(result);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
