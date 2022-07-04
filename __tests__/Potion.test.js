const { exportAllDeclaration } = require("@babel/types");
const Potion = require("../lib/Potion.js");

test("Creates a health potion object,", () => {
  const potion = new Potion("Health");

  expect(potion.name).toBe("Health");
  expect(potion.value).toEqual(expect.any(Number));
});

test("Creates a random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
