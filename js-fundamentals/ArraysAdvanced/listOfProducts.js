function printListOfProducts(products) {
    let numberedList = products
        .sort((a, b) => a.localeCompare(b))
        .map((product, i) => `${i + 1}.${product}`);

    return numberedList.join('\n');
}

console.log(printListOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));
console.log(printListOfProducts(['Watermelon', 'Banana', 'Apples']));
