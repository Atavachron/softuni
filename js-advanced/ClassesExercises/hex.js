class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(hex) {
        const newValue = this.value + hex.valueOf();
        return new Hex(newValue);
    }

    minus(hex) {
        const newValue = this.value - hex.valueOf();
        return new Hex(newValue);
    }

    parse(string) {
        const parsedValue = parseInt(string, 16);
        return new Hex(parsedValue);
    }
}
