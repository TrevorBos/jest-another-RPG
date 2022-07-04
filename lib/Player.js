const Potion = require("../lib/Potion");

function Player(name = "") {
  this.name = name;

  this.Health = Math.floor(Math.random() * 10 + 95);
  this.Strength = Math.floor(Math.random() * 5 + 7);
  this.Agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("Health"), new Potion()];
}

Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    Health: this.Health,
    Strength: this.Strength,
    Agility: this.Agility,
  };
};

Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

Player.prototype.getHealth = function () {
  return `${this.name}'s health is now ${this.Health}!`;
};

Player.prototype.isAlive = function () {
  if (this.Health === 0) {
    return false;
  }
  return true;
};

Player.prototype.reduceHealth = function (health) {
  this.Health -= health;

  if (this.Health < 0) {
    this.Health = 0;
  }
};

module.exports = Player;
