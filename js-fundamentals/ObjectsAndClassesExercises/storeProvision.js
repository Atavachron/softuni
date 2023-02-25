function storeProvision(currentStock, orderedProducts) {
    let products = {};

    addProduct(currentStock);
    addProduct(orderedProducts);

    //Iterate over the object keys and console.log the key-value pairs
    for (let key of Object.keys(products)) {
        console.log(`${key} -> ${products[key]}`);
    }

    //Function that adds the products from the arrays to the products object
    function addProduct(data) {
        for (let i = 0; i < data.length; i += 2) {
            let product = data[i];
            let quantity = Number(data[i + 1]);

            if (product in products) {
                products[product] += quantity;
            } else {
                products[product] = quantity;
            }
        }
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
