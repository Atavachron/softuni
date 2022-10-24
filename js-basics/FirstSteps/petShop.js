// Calculate expenses for pet food. A pack of dog food costs 2.5 lv and a pack of cat food costs 4 lv.
// The input includes the number of dog food packs and cat food packs.

function calculatePetFoodExpenses(input) {
    //Get the number of dog food and cat food packs from the input array and convert to numbers
    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    //Calculate dog food and cat food expenses by multiplying number of packs by the respective price
    let dogFoodExpenses = dogFoodPacks * 2.5;
    let catFoodExpenses = catFoodPacks * 4;

    //Find total expenses by adding the expenses for dog food and cat food
    let totalExpenses = dogFoodExpenses + catFoodExpenses;

    //Console log the result in the appropriate format
    console.log(`${totalExpenses} lv.`);
}

calculatePetFoodExpenses(['5', '4']);
