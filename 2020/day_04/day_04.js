const { getInputFromFile } = require("../utils");
const fs = require("fs");
const path = require("path");

function processPassports() {
  //\r?\n(?=\s)
  const file = getInputFromFile("input.txt", "day_04", /\r\n\r\n/);

  let passportsArray = [];

  file.forEach((f, index) => {
    let final = f.split(/[\s\r\n]+/);
    const passportMap = new Map();
    final.forEach((f) => {
      let entries = f.split(":");
      passportMap.set(entries[0], entries[1]);
    });
    passportsArray.push(passportMap);
  });

  return passportsArray;
}

function countValidPassports(arrayOfPassports) {
  let count = 0;
  arrayOfPassports.forEach((passport) => {
    if (passport.size === 8 || (passport.size === 7 && !passport.has("cid"))) {
      count++;
    }
  });
  
  return count;
}

function countValidPassportsPartTwo(arrayOfPassports) {
    let count = 0;
    arrayOfPassports.forEach((passport) => {
        if (passport.size === 8 || (passport.size === 7 && !passport.has("cid"))) {
            if (validPassport(passport)) {
                count++;
            }
        }
    });
    
    console.log("count", count);
  return count;
}

function validPassport(passport) {
  console.log(
    "passport",
    passport,
    validBYR(passport.get("byr")),
    validIYR(passport.get("iyr")),
    validEYR(passport.get("eyr")),
    validHGT(passport.get("hgt")),
    validHCL(passport.get("hcl")),
    validECL(passport.get("ecl")),
    validPID(passport.get("pid"))
  );
  return (
    validBYR(passport.get("byr")) &&
    validIYR(passport.get("iyr")) &&
    validEYR(passport.get("eyr")) &&
    validHGT(passport.get("hgt")) &&
    validHCL(passport.get("hcl")) &&
    validECL(passport.get("ecl")) &&
    validPID(passport.get("pid"))
  );
}

function validBYR(byrValue) {
  return /(19[2-9][0-9]|200[0-2])/.test(byrValue);
  //   const isValidBYR =
  //     /[0-9]{4}/.test(byrValue) && isWithinRange(byrValue, 1920, 2002);
  //   return isValidBYR;
}

function validIYR(iyrValue) {
  //   const isValidIYR =
  //     /[0-9]{4}/.test(iyrValue) && isWithinRange(iyrValue, 2010, 2020);

  //   return isValidIYR;
  return /(201[0-9]|2020)/.test(iyrValue);
}

function validEYR(eyrValue) {
  //   const isValidEYR =
  //     /[0-9]{4}/.test(eyrValue) && isWithinRange(eyrValue, 2020, 2030);
  //   return isValidEYR;

  return /(202[0-9]|2030)/.test(eyrValue);
}

function validHGT(hgtValue) {

    return /(1[5-8]\\d\|19[0-3])cm\|(59\|6\\d\|7[0-6])in/.test(hgtValue)

    hgtValue.match(/\d+(cm|in)/);
    const cenas = /\d+(cm|in)/.test(hgtValue)
  //   const value = hgtValue.split(/(?=in|cm)/);
  //   if (value[1] === "cm") {
  //     const isValidCM = isWithinRange(value[0], 150, 193);
  //     return isValidCM;
  //   } else if (value[1] === "in") {
  //     const isValidIN = isWithinRange(value[0], 59, 76);
  //     return isValidIN;
  //   }
  //   return false;

  //return /((59|6\\d|7[0-6])in|(1[5-8]\\d|19[0-3])cm)/.test(hgtValue);
}

function validHCL(hclValue) {
  //   if (hclValue.charAt(0) === "#") {
  //     const isValidHCL = /[0-9a-f]{6}/.test(hclValue);

  //     return isValidHCL;
  //   }
  //   return false;

  return /#[0-9a-f]{6}/.test(hclValue);
}

function validECL(eclValue) {
  return /(amb|blu|brn|gry|grn|hzl|oth)/.test(eclValue);
  //   const eclValidValue = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

  //   const isValidECL = eclValidValue.includes(eclValue);

  //   return isValidECL;
}

function validPID(pidValue) {
  //   const isValidPID = /[0-9]{9}/.test(pidValue);

  //   return isValidPID;
  return /^\d{9}$/.test(pidValue);
}

function isWithinRange(value, min, max) {
  return value <= max && value >= min;
}

module.exports = {
  processPassports,
  countValidPassports,
  countValidPassportsPartTwo,
  isWithinRange,
};
countValidPassportsPartTwo(processPassports());
