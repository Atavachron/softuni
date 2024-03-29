class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(p => p.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.quantity += quantity;
        plant.ripe = true;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName === plantName);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === false) {
            throw new Error(
                `The ${plantName} cannot be harvested before it is ripe.`
            );
        }

        this.plants = this.plants.filter(p => p.plantName !== plantName);
        this.storage.push({ plantName, quantity: plant.quantity });
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = [`The garden has ${this.spaceAvailable} free space left.`];

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsArrString = this.plants
            .map(plant => plant.plantName)
            .join(', ');
        let plantsString = `Plants in the garden: ${plantsArrString}`;
        result.push(plantsString);

        let storageArrString = this.storage
            .map(plant => `${plant.plantName} (${plant.quantity})`)
            .join(', ');

        let storageString =
            this.storage.length === 0
                ? `Plants in storage: The storage is empty.`
                : `Plants in storage: ${storageArrString}`;

        result.push(storageString);

        return result.join('\n');
    }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('cucumber', -5));
