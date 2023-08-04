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

console.log(pikachu);
console.log(bulbasaur);
console.log(onyx);

pikachu.hp -= 5;
console.log(pikachu.faint()); // false

console.log(pikachu.revive()); // { name: 'PIKACHU', type: 'Electric', level: 10, hp: 22 }

console.log(pikachu.levelUp()); // { name: 'PIKACHU', type: 'Electric', level: 11, hp: 24 }

console.log(pikachu.call()); // "PIKA-PIKA"
console.log(bulbasaur.call()); // "BULBA-BULBA"
console.log(onyx.call()); // "ONYX-ONYX"

let electricTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Thunder Shock", damage: 4 },
    { name: "Charge Beam", damage: 5 },
    { name: "Thunder Wave", damage: 5 },
    { name: "Spark", damage: 7 },
    { name: "Thunder Punch", damage: 8 },
    { name: "Shock Wave", damage: 10 },
    { name: "Thunder Bolt", damage: 15 },
    { name: "Thunder", damage: 20 },
    { name: "Zap Cannon", damage: 30 },
    { name: "Electric Beam", damage: 35 }
];

let leafTypeMoves = [
    { name: "Absorb", damage: 2 },
    { name: "Tackle", damage: 3 },
    { name: "Bullet Seed", damage: 4 },
    { name: "Mega Drain", damage: 6 },
    { name: "Vine Whip", damage: 8 },
    { name: "Razor Leaf", damage: 15 },
    { name: "Giga Drain", damage: 18 },
    { name: "Seed Bomb", damage: 22 },
    { name: "Petal Dance", damage: 25 },
    { name: "Solar Beam", damage: 35 }
];

let rockTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Rollout", damage: 6 },
    { name: "Rock Blast", damage: 4 },
    { name: "Smack Down", damage: 10 },
    { name: "Rock Throw", damage: 20 },
    { name: "Rock Slide", damage: 30 },
    { name: "Head Smash", damage: 40 },
    { name: "Rock Wrecker", damage: 50 }
];
