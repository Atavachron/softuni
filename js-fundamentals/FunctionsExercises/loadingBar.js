function visualizeLoadingBar(num) {
    let symbolCount = num / 10;
    let dotCount = 10 - symbolCount;
    let bar = '';
    let output;

    for (let i = 0; i < symbolCount; i++) {
        bar += '%';
    }

    for (let j = 0; j < dotCount; j++) {
        bar += '.';
    }

    output = `${num}% [${bar}]
              Still loading...
              `;

    return num === 100 ? `100% Complete!` : output;
}

console.log(visualizeLoadingBar(30));
console.log(visualizeLoadingBar(50));
console.log(visualizeLoadingBar(100));
