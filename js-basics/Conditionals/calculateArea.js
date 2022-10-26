//Calculate the area of a shape
//The shape and corresponding sides are passed as arguments

function calculateArea(input) {
    let shape = input[0];
    let area = 0;

    if (shape === 'square') {
        let a = Number(input[1]);
        area = a * a;
    } else if (shape === 'rectangle') {
        let w = Number(input[1]);
        let h = Number(input[2]);
        area = w * h;
    } else if (shape === 'circle') {
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r, 2);
    } else if (shape === 'triangle') {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) / 2;
    }

    console.log(area.toFixed(3));
}

calculateArea(['square', '5']);
calculateArea(['rectangle', '7', '2.5']);
calculateArea(['circle', '6']);
calculateArea(['triangle', '4.5', '20']);
