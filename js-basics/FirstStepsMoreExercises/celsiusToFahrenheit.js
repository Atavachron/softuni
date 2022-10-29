function convertCelsiusToFahrenheit(input) {
    let celsius = Number(input[0]);

    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit.toFixed(2));
}

convertCelsiusToFahrenheit(['25']);
convertCelsiusToFahrenheit(['0']);
convertCelsiusToFahrenheit(['-5.5']);
convertCelsiusToFahrenheit(['32.3']);
