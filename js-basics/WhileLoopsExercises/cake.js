function calculateCakePieces(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let totalPieces = width * length;

    let index = 2;

    let command = input[index];
    index++;

    while (totalPieces > 0) {
        if (command === 'STOP') {
            console.log(`${totalPieces} pieces are left.`);
            break;
        }

        let currentPieces = Number(command);
        totalPieces -= currentPieces;

        command = input[index];
        index++;
    }

    if (totalPieces <= 0) {
        console.log(
            `No more cake left! You need ${Math.abs(totalPieces)} pieces more.`
        );
    }
}

calculateCakePieces(['10', '10', '20', '20', '20', '20', '21']);
calculateCakePieces(['10', '2', '2', '4', '6', 'STOP']);
