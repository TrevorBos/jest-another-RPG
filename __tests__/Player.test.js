const Player = require("../lib/Player.js");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

console.log(new Potion());

test("Creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.Health).toEqual(expect.any(Number));
  expect(player.Strength).toEqual(expect.any(Number));
  expect(player.Agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("gets player's stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('Health');
  expect(player.getStats()).toHaveProperty('Strength');
  expect(player.getStats()).toHaveProperty('Agility');
});

test('gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

test("gets player's health value", () => {
  const player = new Player('Dave');

  expect(player.getHealth()).toEqual(expect.stringContaining(player.Health.toString()));
});

test('checks if player is alive or not', () => {
  const player = new Player('Dave');

  expect(player.isAlive()).toBeTruthy();

  player.Health = 0;

  expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
  const player = new Player('Dave');
  const oldHealth = player.Health;

  player.reduceHealth(5);

  expect(player.Health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.Health).toBe(0);
});