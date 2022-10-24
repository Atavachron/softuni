function findSquareArea(input) {
    //Get the first number from the input array and convert it to number
    let side = Number(input[0]);

    //Calculate the square area by multiplying the side by itself
    let area = side * side;

    //Log the area to the console
    console.log(area);
}

findSquareArea('5');
