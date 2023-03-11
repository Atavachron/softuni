function companyUsers(input) {
    let companies = {};

    for (let line of input) {
        let [company, user] = line.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }

        companies[company].add(user);
    }

    let sortedCompanies = Object.entries(companies).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    sortedCompanies.forEach(company => {
        console.log(company[0]);
        for (let user of Array.from(company[1])) {
            console.log(`-- ${user}`);
        }
    });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345',
]);
