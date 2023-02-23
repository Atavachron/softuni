function displayCityInfo(city) {
    for (let key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}

displayCityInfo({
    name: 'Plovdiv',
    area: 389,
    population: 1162358,
    country: 'Bulgaria',
    postCode: '4000',
});
