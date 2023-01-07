function solve(input) {
    let moviesCount = Number(input[0]);

    let totalRating = 0;
    let highestRating = Number.MIN_SAFE_INTEGER;
    let lowestRating = Number.MAX_SAFE_INTEGER;
    let highestRatedMovie = '';
    let lowestRatedMovie = '';

    for (let i = 1; i <= moviesCount * 2; i += 2) {
        let currentMovieName = input[i];
        let currentMovieRating = Number(input[i + 1]);

        if (currentMovieRating > highestRating) {
            highestRating = currentMovieRating;
            highestRatedMovie = currentMovieName;
        } else if (currentMovieRating < lowestRating) {
            lowestRating = currentMovieRating;
            lowestRatedMovie = currentMovieName;
        }

        totalRating += currentMovieRating;
    }

    let averageRating = totalRating / moviesCount;

    console.log(
        `${highestRatedMovie} is with highest rating: ${highestRating.toFixed(
            1
        )}`
    );
    console.log(
        `${lowestRatedMovie} is with lowest rating: ${lowestRating.toFixed(1)}`
    );
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

solve([
    '5',
    'A Star is Born',
    '7.8',
    'Creed 2',
    '7.3',
    'Mary Poppins',
    '7.2',
    'Vice',
    '7.2',
    'Captain Marvel',
    '7.1',
]);

solve(['3', 'Interstellar', '8.5', 'Dangal', '8.3', 'Green Book', '8.2']);
