function storeProvision(currentStock, orderedProducts) {
    let products = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        products[product] = quantity;
    }

    for (let j = 0; j < orderedProducts.length; j += 2) {
        let product = orderedProducts[j];
        let quantity = Number(orderedProducts[j + 1]);

        //or if (products.hasOwnProperty(product))
        if (product in products) {
            products[product] += quantity;
        } else {
            products[product] = quantity;
        }
    }

    for (let key of Object.keys(products)) {
        console.log(`${key} -> ${products[key]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour',
        '44',
        'Oil',
        '12',
        'Pasta',
        '7',
        'Tomatoes',
        '70',
        'Bananas',
        '30',
    ]
);
