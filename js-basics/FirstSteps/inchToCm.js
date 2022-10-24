function convertInchToCm(input) {
    //Get the first element of the array and convert it to number
    let inches = Number(input[0]);

    //Convert inches to cm by multiplying the inches by 2.54
    let cm = inches * 2.54;

    console.log(cm);
}

convertInchToCm('5');
