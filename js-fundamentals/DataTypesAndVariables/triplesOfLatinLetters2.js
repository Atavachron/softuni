function solve(num) {
    for (let i = 0; i < num; i++) {
        let a = String.fromCharCode(i + 97);
        for (let j = 0; j < num; j++) {
            let b = String.fromCharCode(j + 97);
            for (let k = 0; k < num; k++) {
                let c = String.fromCharCode(k + 97);
                console.log(`${a}${b}${c}`);
            }
        }
    }
}

solve(3);
