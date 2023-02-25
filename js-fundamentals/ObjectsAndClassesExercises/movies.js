function movieDatabase(input) {
    let movieList = [];

    for (let entry of input) {
        if (entry.includes('addMovie')) {
            let arr = entry.split('addMovie ');
            let movieName = arr[1];

            let obj = {
                name: movieName,
            };

            movieList.push(obj);
        } else if (entry.includes(' directedBy ')) {
            let arr = entry.split(' directedBy ');
            let movieName = arr[0];
            let director = arr[1];

            for (let obj of movieList) {
                if (obj.name === movieName) {
                    obj.director = director;
                }
            }
        } else if (entry.includes('onDate')) {
            let arr = entry.split(' onDate ');
            let movieName = arr[0];
            let date = arr[1];

            for (let obj of movieList) {
                if (obj.name === movieName) {
                    obj.date = date;
                }
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
