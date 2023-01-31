function flyLadybug(arr) {
    let fieldSize = arr[0];
    let ladybugsIndexes = arr[1].split(' ');
    let ladybugsArr = [];

    //Create an array the size of the given field and fill with zeros
    for (let i = 0; i < fieldSize; i++) {
        ladybugsArr.push(0);
    }

    //Replace zeros with one in the respective indexes
    for (let i = 0; i < ladybugsIndexes.length; i++) {
        let ladybugIndex = Number(ladybugsIndexes[i]);
        if (ladybugIndex >= 0 && ladybugIndex < ladybugsArr.length) {
            ladybugsArr[ladybugIndex] = 1;
        }
    }

    for (let i = 2; i < arr.length; i++) {
        let commandsArr = arr[i].split(' ');
        let ladybugIndex = Number(commandsArr[0]);
        let direction = commandsArr[1];
        let jumpLength = Number(commandsArr[2]);

        //Check if the given index is within the field limits
        if (
            ladybugsArr[ladybugIndex] !== 1 ||
            ladybugIndex < 0 ||
            ladybugIndex >= ladybugsArr.length
        ) {
            continue;
        }

        //Check if the jumpLength is a negative number
        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            if (direction === 'right') {
                direction = 'left';
            } else if (direction === 'left') {
                direction = 'right';
            }
        }

        // Remove the ladybug from its current position
        ladybugsArr[ladybugIndex] = 0;
        if (direction === 'right') {
            // Calculate new position (to the right)
            let newPosition = ladybugIndex + jumpLength;
            // Jump again if 1 is present at the new position
            if (ladybugsArr[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            //If new position is within the field print 1
            if (newPosition < ladybugsArr.length) {
                ladybugsArr[newPosition] = 1;
            }
        } else {
            // Calculate new position (to the left)
            let newPosition = ladybugIndex - jumpLength;
            // Jump again if 1 is present at the new position
            if (ladybugsArr[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if (newPosition >= 0) {
                ladybugsArr[newPosition] = 1;
            }
        }
    }

    console.log(ladybugsArr.join(' '));
}

flyLadybug([3, '0 1', '0 right 1', '2 right 1']);
flyLadybug([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
flyLadybug([5, '3', '3 left 2', '1 left -2']);
