function calculateOrderPrice(item, amount) {
    let price = getPrice(item);
    let total = price * amount;

    printTotal(total);

    function getPrice(item) {
        let itemPrice = 0;
        switch (item) {
            case 'coffee':
                itemPrice = 1.5;
                break;
            case 'water':
                itemPrice = 1;
                break;
            case 'coke':
                itemPrice = 1.4;
                break;
            case 'snacks':
                itemPrice = 2;
                break;
        }
        return itemPrice;
    }

    function printTotal(total) {
        console.log(total.toFixed(2));
    }
}

calculateOrderPrice('water', 5);
