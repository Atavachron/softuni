function calculateFreeSpace(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let volume = w * l * h;
    let index = 3;

    let command = input[index];
    index++;

    while (volume > 0) {
        if (command === 'Done') {
            console.log(`${volume} Cubic meters left.`);
            return;
        }

        let packageVolume = Number(command);
        volume -= packageVolume;

        command = input[index];
        index++;
    }

    console.log(
        `No more free space! You need ${Math.abs(volume)} Cubic meters more.`
    );
}

calculateFreeSpace(['10', '1', '2', '4', '6', 'Done']);
calculateFreeSpace(['10', '10', '2', '20', '20', '20', '20', '122']);
