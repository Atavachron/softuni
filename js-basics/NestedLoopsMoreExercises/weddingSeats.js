function solve(input) {
    let lastSector = input[0];
    let firstSectorRows = Number(input[1]);
    let oddRowSeats = Number(input[2]);
    let totalSeats = 0;

    for (let i = 'A'.charCodeAt(0); i <= lastSector.charCodeAt(0); i++) {
        for (let j = 1; j <= firstSectorRows; j++) {
            if (j % 2 !== 0) {
                for (
                    let k = 'a'.charCodeAt(0);
                    k < 'a'.charCodeAt(0) + oddRowSeats;
                    k++
                ) {
                    console.log(
                        `${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`
                    );
                    totalSeats++;
                }
            } else {
                for (
                    let k = 'a'.charCodeAt(0);
                    k < 'a'.charCodeAt(0) + oddRowSeats + 2;
                    k++
                ) {
                    console.log(
                        `${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`
                    );
                    totalSeats++;
                }
            }
        }
        firstSectorRows++;
    }
    console.log(totalSeats);
}

solve(['B', '3', '2']);
