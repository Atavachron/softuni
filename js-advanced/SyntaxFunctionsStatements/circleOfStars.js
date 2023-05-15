function solve(size = 5) {
    let output = '';
    for (let i = 1; i <= size; i++) {
        let line = '';
        for (let j = 1; j <= size; j++) {
            line += '* ';
        }
        output += line.trim() + '\n';
    }
    console.log(output);
}

solve(1);
solve(2);
solve(5);
solve(7);
