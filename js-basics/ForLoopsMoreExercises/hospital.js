function getPatientNumbers(input) {
    let days = Number(input[0]);
    let doctors = 7;

    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= days; i++) {
        let dailyPatients = Number(input[i]);

        if (i % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors++;
        }

        if (dailyPatients <= doctors) {
            treatedPatients += dailyPatients;
        } else {
            treatedPatients += doctors;
            untreatedPatients += dailyPatients - doctors;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

getPatientNumbers(['4', '7', '27', '9', '1']);
getPatientNumbers(['6', '25', '25', '25', '25', '25', '2']);
