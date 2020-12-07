const { test, expect } = require("@jest/globals");
const {
  notReallyWhatIAmHappyAboutSolution,
  passwordPoliciesPartTwo,
} = require("./day_02");

test("Check if valid passwords count is the one expected", () => {
  const result = notReallyWhatIAmHappyAboutSolution();
  expect(result).toBe(636);
});

test("Check how many valid passwords are there with second rule", () => {
  const result = passwordPoliciesPartTwo();
  expect(result).toBe(588);
});
