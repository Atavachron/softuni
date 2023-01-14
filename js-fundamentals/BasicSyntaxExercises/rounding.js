function roundNumber(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    //Round the number to the amount of decimals shown by precicions. Output is string.
    let roundedNumAsString = num.toFixed(precision);
    //Convert the string to a number, while removing trailing zeros using parseFloat()
    let output = parseFloat(roundedNumAsString);

    console.log(output);
}

roundNumber(3.1415926535897932384626433832795, 2);
roundNumber(10.5, 3);
