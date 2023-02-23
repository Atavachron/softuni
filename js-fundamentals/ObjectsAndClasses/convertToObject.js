// function convertToObject(str) {
//     let obj = JSON.parse(str);
//     for (let key of Object.keys(obj)) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

function convertToObject(str) {
    let obj = JSON.parse(str);

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
