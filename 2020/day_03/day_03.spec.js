const { test, expect } = require("@jest/globals");
const {
  countHowManyTreesAreWGoingToEncounter,
  finalEncounteredTrees,
} = require("./day_03");

test("Should return correct number of trees for first part", () => {
  const result = countHowManyTreesAreWGoingToEncounter(3, 1);
  expect(result).toBe(205);
});

test("Should return correct number of total trees", () => {
  const result = finalEncounteredTrees();
  expect(result).toBe(3952146825);
});
