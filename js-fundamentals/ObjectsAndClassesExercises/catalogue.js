function createCatalogue(input) {
    class Product {
        constructor(productName, productPrice) {
            this.productName = productName;
            this.productPrice = productPrice;
            this.firstLetter = this.productName[0].toUpperCase();
        }
    }

    let catalogue = input.map(el => {
        let [productName, productPrice] = el.split(' : ');
        productPrice = Number(productPrice);

        let newProduct = new Product(productName, productPrice);
        return newProduct;
    });

    catalogue.sort((a, b) => a.productName.localeCompare(b.productName));

    let currentLetter = '';
    catalogue.forEach(product => {
        if (product.firstLetter !== currentLetter) {
            console.log(product.firstLetter);
            currentLetter = product.firstLetter;
        }
        console.log(`  ${product.productName}: ${product.productPrice}`);
    });
}

createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);

createCatalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);
