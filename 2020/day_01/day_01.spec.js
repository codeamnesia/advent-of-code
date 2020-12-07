const { test, expect } = require("@jest/globals");
const {
  findTheEntrieForTheFinalSum,
  getReportExpense,
  findThreeEntries,
} = require("./day_01");

const input = require("./day_01_input");

test("Find the two entries that sum 2020 for the elves ", () => {
  const result = findTheEntrieForTheFinalSum(2020, input);

  expect(result).toEqual([279, 1741]);
});

test("Return the expected multiplication", () => {
  const result = getReportExpense([279, 1741]);

  expect(result).toBe(485739);
});

test("Return the three entries that sum 2020 for the elves", () => {
  const result = findThreeEntries(2020, input);

  expect(result).toEqual([494, 1269, 257]);
});

test("Return the multiplication of the three entries", () => {
  const threeEntries = findThreeEntries(2020, input);

  const result = getReportExpense(threeEntries);
  expect(result).toBe(161109702);
});
