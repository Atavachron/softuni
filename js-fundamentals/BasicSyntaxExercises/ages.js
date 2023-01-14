function solve(age) {
    let description = '';

    if (0 <= age && age <= 2) {
        description = 'baby';
    } else if (3 <= age && age <= 13) {
        description = 'child';
    } else if (14 <= age && age <= 19) {
        description = 'teenager';
    } else if (20 <= age && age <= 65) {
        description = 'adult';
    } else if (age >= 66) {
        description = 'elder';
    } else {
        description = 'out of bounds';
    }

    console.log(description);
}

solve(20);
solve(1);
solve(100);
solve(-1);
