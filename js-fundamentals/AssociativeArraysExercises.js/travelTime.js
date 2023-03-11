function travelTime(input) {
    let countries = {};

    for (let line of input) {
        let [country, city, cost] = line.split(' > ');
        cost = Number(cost);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }

        if (
            !countries[country].hasOwnProperty(city) ||
            countries[country][city] > cost
        ) {
            countries[country][city] = cost;
        }
    }

    let sortedCountries = Object.entries(countries).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let [country, cities] of sortedCountries) {
        let sortedCities = Object.entries(cities)
            .sort((a, b) => a[1] - b[1])
            .map(([city, cost]) => `${city} -> ${cost}`)
            .join(' ');

        console.log(`${country} -> ${sortedCities}`);
    }
}

travelTime([
    'Bulgaria > Sofia > 500',

    'Bulgaria > Sopot > 800',

    'France > Paris > 2000',

    'Albania > Tirana > 1000',

    'Bulgaria > Sofia > 200',
]);
