//Convert the input in radians to degrees using the formula "degree = radian * 180 / pi"

function convertRadiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = (radians * 180) / Math.PI;

    console.log(degrees);
}

convertRadiansToDegrees(['3.1416']);
