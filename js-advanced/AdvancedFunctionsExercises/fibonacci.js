function getFibonator() {
    let current = 1;
    let next = 1;

    return function () {
        const result = current;
        [current, next] = [next, current + next];
        return result;
    };
}
