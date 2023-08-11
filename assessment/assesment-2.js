class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}
class Inventory {
    constructor() {
        this.goods = [];
    }

    addGood(good) {
        const existing = this.goods.includes(good.id);
        this.goods.push(good);
        if (existing === undefined) {
            throw new Error("Good not found");
        }
    }

    removeGood(name) {
        let indexToRemove = -1;
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].name === name) {
                indexToRemove = i;
            }
        }

        if (indexToRemove !== -1) {
            this.goods.splice(indexToRemove, 1);
        } else {
            throw new Error("Good not found");
        }
    }
    viewGood() {
        return this.good;
    }
    searchByName(name) {
        const matchedGoods = [];

        for (let i = 0; i < this.goods.length; i++) {
            const good = this.goods[i];
            if (good.name.includes(name)) {
                matchedGoods.push(good);
            }
        }

        return matchedGoods;
    }
    applyDiscount(percent) {
        goods.price *= 1 - percent / 100;
    }
    sellGood(name, quantity) {
        let goodIndex = -1;
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].name === name) {
                goodIndex = i;
            }
        }

        if (goodIndex !== -1 && this.goods[goodIndex].quantity >= quantity) {
            this.goods[goodIndex].quantity -= quantity;
        } else {
            throw new Error("Good not found");
        }
    }
}

const inventory = new Inventory();

const apple = new Good(1, "Apple", 50, 0.5);
inventory.addGood(apple);
console.log(inventory.searchByName("Apple"));
inventory.applyDiscount(10);
