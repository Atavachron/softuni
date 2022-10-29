function guessWeather(input) {
    let temperature = Number(input[0]);

    if (temperature < 5 || temperature > 35) {
        console.log('unknown');
    } else if (temperature <= 11.9) {
        console.log('Cold');
    } else if (temperature <= 14.9) {
        console.log('Cool');
    } else if (temperature <= 20) {
        console.log('Mild');
    } else if (temperature <= 25.9) {
        console.log('Warm');
    } else if (temperature <= 35) {
        console.log('Hot');
    }
}

guessWeather(['16.5']);
guessWeather(['8']);
guessWeather(['22.4']);
guessWeather(['26']);
guessWeather(['0']);
