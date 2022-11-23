function findBook(input) {
    let index = 0;

    let searchedBook = input[index];
    index++;

    let command = input[index];
    index++;

    let isFound = false;

    while (command !== 'No More Books') {
        let currentBook = command;

        if (currentBook === searchedBook) {
            isFound = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (isFound) {
        console.log(`You checked ${index - 2} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${index - 2} books.`);
    }
}

findBook(['Troy', 'Stronger', 'Life Style', 'Troy']);

findBook([
    'The Spot',

    'Hunger Games',

    'Harry Potter',

    'Torronto',

    'Spotify',

    'No More Books',
]);

findBook([
    'Bourne',

    'True Story',

    'Forever',

    'More Space',

    'The Girl',

    'Spaceship',

    'Strongest',

    'Profit',

    'Tripple',

    'Stella',

    'The Matrix',

    'Bourne',
]);
