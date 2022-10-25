function calculateTankVolume(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let pct = Number(input[3]);

    //Calculate the tank volume in cm
    let totalVolumeInCm = length * width * height;
    //Calculate the tank volume in litres (one litre is 10 * 10 * 10 cm)
    let totalVolumeInLitres = totalVolumeInCm / 1000;

    //Calculate free volume by subtracting the volume used up by equipment
    let freeVolume = totalVolumeInLitres - (totalVolumeInLitres * pct) / 100;

    console.log(freeVolume);
}

calculateTankVolume(['85 ', '75 ', '47 ', '17 ']);
