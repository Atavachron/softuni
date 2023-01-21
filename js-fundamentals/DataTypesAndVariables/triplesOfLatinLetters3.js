function solve(num) {
    let limit = Number(num);

    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < limit; j++) {
            for (let k = 0; k < limit; k++) {
                //Since we alway start with a, we can obtain the charCode of a and add the iterators to it
                let char1 = String.fromCharCode('a'.charCodeAt(0) + i);
                let char2 = String.fromCharCode('a'.charCodeAt(0) + j);
                let char3 = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${char1}${char2}${char3}`);
            }
        }
    }
}

solve('3');
