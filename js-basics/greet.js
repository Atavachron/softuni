function greet(input) {
    //Get the first element of the input array
    let name = input[0];

    //Use string interpolation to log the greeting and the name to the console
    console.log(`Hello, ${name}!`);
}

greet(['John']);
