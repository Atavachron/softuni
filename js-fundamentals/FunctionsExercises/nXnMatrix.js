function printMatrix(n) {
    let matrix = '';
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += `${n} `;
        }
        matrix += row + '\n';
    }

    return matrix;
}

console.log(printMatrix(7));
