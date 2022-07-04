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
