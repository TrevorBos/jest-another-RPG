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

Player.prototype.getAttackValue = function() {
    const min = this.Strength - 5;
    const max = this.Strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };

  Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
  };

  Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
  
    switch (potion.name) {
      case 'Agility':
        this.Agility += potion.value;
        break;
      case 'Health':
        this.Health += potion.value;
        break;
      case 'Strength':
        this.Strength += potion.value;
        break;
    }
  };

module.exports = Player;
