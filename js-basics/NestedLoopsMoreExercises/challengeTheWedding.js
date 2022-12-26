function solve(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);

    let output = '';

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            if (tables === 0) break;
            output += `(${i} <-> ${j}) `;
            tables--;
        }
    }
    console.log(output);
}

solve(['2', '2', '3']);
