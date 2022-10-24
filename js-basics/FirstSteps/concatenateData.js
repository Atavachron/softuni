function concatenateData(input) {
    //Get first name, last name, age and city from the input array.
    let firstName = input[0];
    let lastName = input[1];
    //Convert the age to number
    let age = Number(input[2]);
    let city = input[3];

    //Use concatenation to print the result
    let result =
        'You are ' +
        firstName +
        ' ' +
        lastName +
        ', ' +
        'a ' +
        age +
        '-years old person from ' +
        city +
        '.';

    console.log(result);
}

concatenateData(['Maria', 'Ivanova', 20, 'Sofia']);
