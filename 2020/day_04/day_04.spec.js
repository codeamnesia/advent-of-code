const { test, expect } = require("@jest/globals");
const { countValidPassports, processPassports, countValidPassportsPartTwo, isWithinRange } = require("./day_04");

test("Should", () => {
  const passports = processPassports();
  const result = countValidPassports(passports);
  expect(result).toBe(170);
});


test("Should", () => {
    const passports = processPassports();
    const result = countValidPassportsPartTwo(passports);
    expect(result).toBe(170);
  });

  test('Should return true', () =>{
      const result = isWithinRange(80, 65, 80);
      expect(result).toBeTruthy();
})
