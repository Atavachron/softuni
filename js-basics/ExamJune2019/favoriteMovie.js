function solve(input) {
    let index = 0;
    let command = input[index];
    index++;

    let movieCount = 0;
    let maxPoints = 0;
    let maxPointsMovie = '';

    while (command !== 'STOP') {
        if (movieCount === 7) {
            console.log(`The limit is reached.`);
            break;
        }

        let movie = command;
        let points = 0;

        for (let i = 0; i < movie.length; i++) {
            let char = movie[i].charCodeAt(0);

            if (char >= 97 && char <= 122) {
                char -= movie.length * 2;
            } else if (char >= 65 && char <= 90) {
                char -= movie.length;
            }

            points += char;

            if (points > maxPoints) {
                maxPoints = points;
                maxPointsMovie = movie;
            }
        }

        movieCount++;

        command = input[index];
        index++;
    }
    console.log(
        `The best movie for you is ${maxPointsMovie} with ${maxPoints} ASCII sum.`
    );
}

solve(['Matrix', 'Breaking bad', 'Legend', 'STOP']);

solve([
    'Wrong turn',
    'The maze',
    'Area 51',
    'Night Club',
    'Ice age',
    'Harry Potter',
    'Wizards',
]);
