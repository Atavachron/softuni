function matchName(input) {
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = input.match(regEx);
    console.log(result.join(' '));
}

matchName(
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan     Ivanov'
);
