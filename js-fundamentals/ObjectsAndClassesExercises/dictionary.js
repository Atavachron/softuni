function createDictionary(input) {
    let dictionary = {};

    input.forEach(el => {
        let obj = JSON.parse(el);
        for (let key in obj) {
            dictionary[key] = obj[key];
        }
    });

    let sortedTerms = Object.keys(dictionary).sort((a, b) =>
        a.localeCompare(b)
    );

    sortedTerms.forEach(word =>
        console.log(`Term: ${word} => Definition: ${dictionary[word]}`)
    );
}

createDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
