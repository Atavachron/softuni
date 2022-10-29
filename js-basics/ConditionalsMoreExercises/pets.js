function calculatePetFood(input) {
    let daysAway = Number(input[0]);
    let petFoodLeft = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);

    //Turtle food is input in grams. Convert it to kg
    turtleFoodPerDay /= 1000;

    let petFoodEaten =
        daysAway * (dogFoodPerDay + catFoodPerDay + turtleFoodPerDay);

    let diff = Math.abs(petFoodLeft - petFoodEaten);

    if (petFoodLeft >= petFoodEaten) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

calculatePetFood(['2', '10', '1', '1', '1200']);
calculatePetFood(['5', '10', '2.1', '0.8', '321']);
