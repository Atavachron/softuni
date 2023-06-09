const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Default value
        this.active = true; // Default value
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }
    get VAT() {
        return this._VAT;
    }
    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }
    get active() {
        return this._active;
    }
    set active(newValue) {
        if (typeof newValue !== 'boole an') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }
    toString() {
        const output = [
            `Package: ${this.name}` +
                (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`,
        ];
        return output.join('\n');
    }
}

describe('Tests for PaymentPackage', () => {
    describe('Tests for the Name', () => {
        it('constructor', () => {
            const instance = new PaymentPackage('Name', 100);
            assert.equal(instance._name, 'Name', '1');
            assert.equal(instance._value, 100, '3');
            assert.equal(instance._VAT, 20, '4');
            assert.equal(instance._active, true, '5');
        });
    });

    it('throw new Error if the Name is a number', () => {
        expect(() => new PaymentPackage(123, 213)).to.throw(
            'Name must be a non-empty string'
        );
    });

    it('throw new Error if the Name is a string array', () => {
        expect(() => new PaymentPackage(['a', 'b', 'c'], 213)).to.throw(
            'Name must be a non-empty string'
        );
    });

    it('throw new Error if the Name is an empty string', () => {
        expect(() => new PaymentPackage('', 213)).to.throw(
            'Name must be a non-empty string'
        );
    });

    it('should not throw error', () => {
        expect(() => new PaymentPackage('abc', 213)).not.to.throw(
            'Name must be a non-empty string'
        );
    });

    describe('Tests for the Value', () => {
        it('set value to null', () => {
            const instance = new PaymentPackage('Name', 100);

            assert.doesNotThrow(() => {
                instance.value = 0;
            });
        });

        it('throw new Error if the Value is string', () => {
            expect(() => new PaymentPackage('123', 'abc')).to.throw(
                'Name must be a non-negative number'
            );
        });

        it('throw new Error if the Value is array', () => {
            expect(() => new PaymentPackage('abc', [1, 2, 3])).to.throw(
                'Name must be a non-negative number'
            );
        });

        it('throw new Error if the Value is negative number', () => {
            expect(() => new PaymentPackage('abc', -123)).to.throw(
                'Name must be a non-negative number'
            );
        });

        it('should not throw error', () => {
            expect(() => new PaymentPackage('abc', 213)).not.to.throw(
                'Name must be a non-negative number'
            );
        });
    });

    describe('Tests for the VAT', () => {
        it('throw new Error if the VAT is string', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.VAT = 'abc')).to.throw(
                'VAT must be a non-negative number'
            );
        });

        it('throw new Error if the VAT is an array', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.VAT = [1, 2, 3])).to.throw(
                'VAT must be a non-negative number'
            );
        });

        it('throw new Error if the VAT is a negative number', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.VAT = -3)).to.throw(
                'VAT must be a non-negative number'
            );
        });

        it('to not throw an Error if the VAT is a number', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.VAT = -3)).not.to.throw(
                'VAT must be a non-negative number'
            );
        });
    });

    describe('Tests for the Active', () => {
        it('throw new Error if the Active is string', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.active = 'abc')).to.throw(
                'Active status must be a boolean'
            );
        });

        it('throw new Error if the Active is number', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.active = 123)).to.throw(
                'Active status must be a boolean'
            );
        });

        it('throw new Error if the Active is negative number', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.active = -123)).to.throw(
                'Active status must be a boolean'
            );
        });

        it('to not throw an Error if the Active is boolean', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.active = true)).to.not.throw(
                'Active status must be a boolean'
            );
        });

        it('throw new Error if the Active is array', () => {
            let instance = new PaymentPackage('abc', 123);
            expect(() => (instance.active = [123])).to.throw(
                'Active status must be a boolean'
            );
        });
    });

    describe('Tests for the toString method', () => {
        it('if input is correct to return string', () => {
            const instance = new PaymentPackage('abc', 123);
            const output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`,
            ];

            expect(instance.toString()).to.equal(output.join('\n'));
        });

        it('if input is correct and VAT is set to 30 to return string', () => {
            const instance = new PaymentPackage('abc', 123);
            instance.VAT = 30;
            const output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`,
            ];

            expect(instance.toString()).to.equal(output.join('\n'));
        });

        it('if input is correct and Active is set to false to return string', () => {
            const instance = new PaymentPackage('abc', 123);
            instance.active = false;
            const output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`,
            ];

            expect(instance.toString()).to.equal(output.join('\n'));
        });

        it('if input is correct and Active is set to false and VAT to 30 to return string', () => {
            const instance = new PaymentPackage('abc', 123);
            instance.active = false;
            instance.VAT = 30;
            const output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`,
            ];

            expect(instance.toString()).to.equal(output.join('\n'));
        });
    });
});
