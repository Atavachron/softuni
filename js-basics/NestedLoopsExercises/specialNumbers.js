function solve(input) {
    let n = Number(input[0]);
    let output = '';
    for (let i = 1111; i <= 9999; i++) {
        let specialNum = '';
        let str = i.toString();
        for (let j = 0; j < str.length; j++) {
            if (n % Number(str[j]) === 0) {
                specialNum += str[j];
            }
        }
        if (specialNum.length === 4) {
            output += specialNum + ' ';
        }
    }
    console.log(output);
}

solve(['3']);
