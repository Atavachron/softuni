function bombNumbers(seq, bomb) {
    let [bombNum, bombPower] = bomb;

    //Keep splicing until there are no more bombNum
    while (seq.includes(bombNum)) {
        seq.splice(
            //Make sure that the starting index is not below zero
            Math.max(0, seq.indexOf(bombNum) - bombPower),

            //Delete the following number of elements (double the power plus the bomb itself)
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
