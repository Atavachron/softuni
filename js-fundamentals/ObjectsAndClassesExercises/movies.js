function movieDatabase(input) {
    let movieList = [];

    for (let entry of input) {
        if (entry.includes('addMovie')) {
            let name = entry.split('addMovie ')[1];

            movieList.push({ name });
        } else if (entry.includes('directedBy')) {
            let [name, director] = entry.split(' directedBy ');

            let movie = movieList.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (entry.includes('onDate')) {
            let [name, date] = entry.split(' onDate ');

            let movie = movieList.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }

    movieList.forEach(movie => {
        if (
            movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('director') &&
            movie.hasOwnProperty('date')
        ) {
            console.log(JSON.stringify(movie));
        }
    });
}

movieDatabase([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);

movieDatabase([
    'addMovie The Avengers',

    'addMovie Superman',

    'The Avengers directedBy Anthony Russo',

    'The Avengers onDate 30.07.2010',

    'Captain America onDate 30.07.2010',

    'Captain America directedBy Joe Russo',
]);
