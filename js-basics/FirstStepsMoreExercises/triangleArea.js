//Calculate the area of a triangle

function calculateArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);

    let area = (a * h) / 2;
    console.log(area.toFixed(2));
}

calculateArea(['20', '30']);
calculateArea(['15', '35']);
calculateArea(['7.75', '8.45']);
calculateArea(['1.23456', '4.56789']);
