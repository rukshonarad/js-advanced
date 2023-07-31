function Pet(name, hunger, happined) {
    this.name = name;
    this.hunger = hunger;
    this.happines = happined;
}
Pet.prototype.eat = function () {
    if (this.hunger - 1 >= 0) {
        this.hunger--;
    }
};
Pet.prototype.play = function () {
    this.hunger += 1;
    this.happines += 2;
};
Pet.prototype.sleep = function () {
    this.hunger++;
};

Pet.prototype.status = function () {
    if (this.hunger < 3) {
        return `${this.name} is really hungry`;
    }
    return `${this.name} is feeling realy great`;
};
Pet.prototype.getOlder = function () {
    this.happines -= 1;
    this.hunger += 1;
};
Pet.prototype.introduce = function () {
    return `Hey I am  ${this.name} , and my happines level is ${this.happines} , hunger is ${this.hunger}`;
};
Pet.prototype.timeout = function () {
    const initialHappiness = this.happines;
    this.happines = 0;
    console.log(
        ` Hey , my happine was ${initialHappiness} , but now it is ${this.happines} `
    );
};

const pet1 = new Pet("Bobik", 0, 10);
console.log(pet1);
