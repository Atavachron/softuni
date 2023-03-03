function organizeStorage(input) {
    let storage = new Map();

    input.forEach(el => {
        let [product, quantity] = el.split(' ');

        if (storage.has(product)) {
            let currentQuantity = storage.get(product);
            let newQuantity = Number(quantity) + currentQuantity;
            storage.set(product, newQuantity);
        } else {
            storage.set(product, Number(quantity));
        }
    });

    Array.from(storage.entries()).forEach(([product, quantity]) =>
        console.log(`${product} -> ${quantity}`)
    );
}

// organizeStorage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
organizeStorage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);
