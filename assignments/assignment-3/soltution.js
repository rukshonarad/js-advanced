class Pokemon {
    constructor(name, type, level = 5) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.maxHp = Math.floor(2.25 * this.level);
        this.hp = this.maxHp;
        this.moves = this.moves;
    }

    bulbasaur() {
        this.name.toUpperCase();
        this.level(0).toUpperCase().slice(1).toLowerCase();
        this.level = 11;
        let hp = Math.floor(2.25 * this.level);
        // console.log(
        //     `name: ${this.name}, type: ${this.type}, level: ${this.level}, hp: ${hp}`
        // );
    }
    onyx() {
        this.name.toUpperCase();
        this.level(0).toUpperCase().slice(1).toLowerCase();
        return hp.toFixed(2);
        // console.log(
        //     `name: ${this.name}, type: ${this.type}, level: ${this.level}, hp: ${hp}`
        // );
    }
    levelUp() {
        this.level++;
        this.maxHp = Math.floor(2.25 * this.level);
        this.hp = this.maxHp;

        return this;
    }
    faint() {
        return this.hp <= 0;
    }
    revive() {
        this.hp = this.maxHp;
        return this;
    }
    call() {
        let name = this.name.toUpperCase();
        let nickname = name;
        return `${nickname}-${nickname}`;
    }
}

let pikachu = new Pokemon("PIKACHU", "Electric", 10);
let bulbasaur = new Pokemon("bulbasaur", "leaf", 11);
let onyx = new Pokemon("onyx", "rock");

// console.log(("PIKACHU", "Electric", 10).pikachu());
Pokemon.prototype.moves = function () {};
