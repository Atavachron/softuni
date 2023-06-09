class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    updateSize() {
        this.size = this.list.length;
    }

    add(el) {
        this.list.push(el);
        this.updateSize();
        this.orderList();
    }

    remove(index) {
        if (this.list[index] === undefined) {
            return;
        }
        this.list.splice(index, 1);
        this.updateSize();
        this.orderList();
    }

    orderList() {
        return this.list.sort((a, b) => a - b);
    }

    get(index) {
        if (this.list[index] === undefined) {
            return;
        }
        return this.list[index];
    }
}
