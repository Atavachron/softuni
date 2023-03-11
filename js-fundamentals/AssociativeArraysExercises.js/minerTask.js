function minerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0;
        }

        resources[resource] += quantity;
    }

    for (let [key, value] of Object.entries(resources)) {
        console.log(`${key} -> ${value}`);
    }
}

// minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
