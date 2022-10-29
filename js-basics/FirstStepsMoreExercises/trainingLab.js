function calculateDesks(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let length = a * 100;
    let width = b * 100 - 100;

    let desksPerRow = Math.floor(width / 70);
    let rows = Math.floor(length / 120);

    let totalDesks = desksPerRow * rows - 3;

    console.log(totalDesks);
}

calculateDesks(['15', '8.9']);
