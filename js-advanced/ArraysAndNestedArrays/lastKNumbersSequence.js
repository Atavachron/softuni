// You are given two integers n and k. Write a JS function that generates and return the following sequence:
//  The first element is 1
//  Every following element equals the sum of the previous k elements
//  The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the
// number k.
// The output is the return value of your function and should be an array of numbers.

function solve(n, k) {
    let output = [1];

    for (let i = 1; i < n; i++) {
        //-k takes the last k elements of the array.
        let sum = output.slice(-k).reduce((a, b) => a + b, 0);
        output.push(sum);
    }

    return output;
}

solve(6, 3);
solve(8, 2);
