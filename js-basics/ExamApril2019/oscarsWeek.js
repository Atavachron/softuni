function solve(input) {
    let movie = input[0];
    let hall = input[1];
    let ticketCount = Number(input[2]);

    let price = 0;

    switch (movie) {
        case 'A Star Is Born':
            switch (hall) {
                case 'normal':
                    price = 7.5;
                    break;
                case 'luxury':
                    price = 10.5;
                    break;
                case 'ultra luxury':
                    price = 13.5;
                    break;
            }
            break;
        case 'Bohemian Rhapsody':
            switch (hall) {
                case 'normal':
                    price = 7.35;
                    break;
                case 'luxury':
                    price = 9.45;
                    break;
                case 'ultra luxury':
                    price = 12.75;
                    break;
            }
            break;
        case 'Green Book':
            switch (hall) {
                case 'normal':
                    price = 8.15;
                    break;
                case 'luxury':
                    price = 10.25;
                    break;
                case 'ultra luxury':
                    price = 13.25;
                    break;
            }
            break;
        case 'The Favourite':
            switch (hall) {
                case 'normal':
                    price = 8.75;
                    break;
                case 'luxury':
                    price = 11.55;
                    break;
                case 'ultra luxury':
                    price = 13.95;
                    break;
            }
            break;
    }

    let total = price * ticketCount;

    console.log(`${movie} -> ${total.toFixed(2)} lv.`);
}

solve(['A Star Is Born', 'luxury', '42']);
solve(['Green Book', 'normal', '63']);
