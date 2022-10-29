function calculatePaintingCost(input) {
    let height = Number(input[0]);
    let length = Number(input[1]);
    let roofHeight = Number(input[2]);

    let back = Math.pow(height, 2);
    let front = back - 1.2 * 2;
    let side = height * length - Math.pow(1.5, 2);
    let walls = back + front + side * 2;

    let roof = height * roofHeight + height * length * 2;

    let greenPaint = walls / 3.4;
    let redPaint = roof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

calculatePaintingCost(['6', '10', '5.2']);
