function calculatePercentages(input) {
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;

    for (let i = 1; i < input.length; i++) {
        if (Number(input[i]) < 200) {
            n1++;
        } else if (Number(input[i]) < 400) {
            n2++;
        } else if (Number(input[i]) < 600) {
            n3++;
        } else if (Number(input[i]) < 800) {
            n4++;
        } else {
            n5++;
        }
    }

    let p1 = (n1 / (input.length - 1)) * 100;
    let p2 = (n2 / (input.length - 1)) * 100;
    let p3 = (n3 / (input.length - 1)) * 100;
    let p4 = (n4 / (input.length - 1)) * 100;
    let p5 = (n5 / (input.length - 1)) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

calculatePercentages(['3', '1', '2', '999']);
