function printListOfProducts(products) {
    let numberedList = products
        .sort()
        .map((product, i) => `${i + 1}.${product}`)
        .forEach(item => console.log(item));
}

printListOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
printListOfProducts(['Watermelon', 'Banana', 'Apples']);
