// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit
// you want to buy, a number for weight in grams, and another number for the price per kilogram.
// Print the following text on the console:
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.

function solve(fruit, grams, price) {
    let weightInKg = grams / 1000;
    let total = weightInKg * price;

    console.log(
        `I need $${total.toFixed(2)} to buy ${weightInKg.toFixed(
            2
        )} kilograms ${fruit}.`
    );
}

solve('orange', 2500, 1.8);
solve('apple', 1563, 2.35);
