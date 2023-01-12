function logCountryLanguage(country) {
    switch (country) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}

logCountryLanguage('England');
logCountryLanguage('Mexico');
logCountryLanguage('Germany');
