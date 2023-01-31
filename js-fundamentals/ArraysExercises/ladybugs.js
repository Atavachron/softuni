function flyLadybug(input) {
    let fieldSize = input[0];
    let indexesArray = input[1].split(' ');
    let field = new Array(fieldSize).fill(0);

    let index = 2;
    let command = input[index];
    index++;

    for (let i = 0; i < indexesArray.length; i++) {
        let flyIndex = Number(indexesArray[i]);
        if (flyIndex < field.length) {
            field[flyIndex] = 1;
        }
    }

    while (command) {
        let commandArray = command.split(' ');

        let commandIndex = Number(commandArray[0]);
        let direction = commandArray[1];
        let steps = Number(commandArray[2]);

        if (field[commandIndex]) {
            if (direction === 'right') {
                let originalIndex = commandIndex;
                if (
                    !field[commandIndex + steps] &&
                    commandIndex < field.length &&
                    commandIndex + steps < field.length
                ) {
                    field[commandIndex + steps] = 1;
                } else {
                    while (
                        field[commandIndex + steps] &&
                        commandIndex < field.length &&
                        commandIndex + steps < field.length
                    ) {
                        field[commandIndex + steps] = 1;
                        commandIndex += steps;
                    }
                }

                field[originalIndex] = 0;
            } else if (direction === 'left') {
                let originalIndex = commandIndex;

                if (
                    !field[commandIndex - steps] &&
                    commandIndex >= 0 &&
                    commandIndex - steps >= 0
                ) {
                    field[commandIndex - steps] = 1;
                } else {
                    while (
                        field[commandIndex - steps] &&
                        commandIndex >= 0 &&
                        commandIndex - steps >= 0
                    ) {
                        field[commandIndex - steps] = 1;
                        commandIndex -= steps;
                    }
                }

                field[originalIndex] = 0;
            }
        }

        command = input[index];
        index++;
    }

    console.log(field.join(' '));
}
flyLadybug([3, '0 1', '0 right 1', '2 right 1']);
flyLadybug([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);

flyLadybug([5, '3', '3 left 2', '1 left -2']);
