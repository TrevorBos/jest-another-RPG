const Potion = require('../lib/Potion');

function Player (name = "") {
    this.name = name;

    this.Health =  Math.floor(Math.random() * 10 + 95);
    this.Strength = Math.floor(Math.random() * 5 + 7);
    this.Agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion("Health"), new Potion()];
}

module.exports = Player;