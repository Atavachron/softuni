function solve(age) {
    let description = '';

    if (age < 0) {
        description = 'out of bounds';
    } else if (age <= 2) {
        description = 'baby';
    } else if (age <= 13) {
        description = 'child';
    } else if (age <= 19) {
        description = 'teenager';
    } else if (age <= 65) {
        description = 'adult';
    } else {
        description = 'elder';
    }

    console.log(description);
}

solve(20);
solve(1);
solve(100);
solve(-1);
