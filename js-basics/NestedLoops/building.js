function solve(input) {
    let floors = Number(input[0]);
    let units = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let floor = '';
        for (let j = 0; j < units; j++) {
            if (i === floors) {
                floor += `L${i}${j} `;
            } else if (i % 2 === 0) {
                floor += `O${i}${j} `;
            } else {
                floor += `A${i}${j} `;
            }
        }

        console.log(floor);
    }
}

solve(['6', '4']);
solve[('9', '5')];
