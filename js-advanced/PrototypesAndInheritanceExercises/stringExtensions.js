(function solve() {
    String.prototype.ensureStart = function (str) {
        let actualStr = this.toString();
        if (actualStr.startsWith(str)) {
            return actualStr;
        } else {
            return str + actualStr;
        }
    };

    String.prototype.ensureEnd = function (str) {
        let actualStr = this.toString();
        if (actualStr.endsWith(str)) {
            return actualStr;
        } else {
            return actualStr + str;
        }
    };

    String.prototype.isEmpty = function () {
        let actualStr = this.toString();
        return actualStr.length === 0;
    };

    String.prototype.truncate = function (n) {
        const ELLIPSIS = '...';
        const SINGLE_POINT = '.';
        const strValue = this.toString();

        if (n <= 3) {
            return SINGLE_POINT.repeat(n);
        }

        if (strValue.length <= n) {
            return strValue;
        }

        const lastIndex = strValue.substr(0, n - 2).lastIndexOf(' ');
        if (lastIndex !== -1) {
            return `${strValue.substr(0, lastIndex)}${ELLIPSIS}`;
        }

        return `${strValue.substr(0, n - 3)}${ELLIPSIS}`;
    };

    String.prototype.format = function (string, ...params) {
        let str = string;
        for (let i = 0; i < params.length; i++) {
            let index = str.indexOf(`{${i}}`);

            while (index !== -1) {
                str = str.replace(`{${i}}`, params[i]);
                index = str.indexOf(`{${i}}`);
            }
        }
        return str;
    };
})();
