const fs = require("fs");
const path = require("path");

function getInput() {
  const fileRead = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
  const input = fileRead.split(/\r?\n/).map((pass) => pass.split(/[\s:-]+/));

  return input;
}

function notReallyWhatIAmHappyAboutSolution() {
  const passwords = getInput();

  let totalValidCount = 0;

  passwords.forEach((password) => {
    const minimum = password[0];
    const maximum = password[1];
    const passChar = password[2];
    const pass = password[3];

    let passCount = 0;
    for (var i = 0; i < pass.length; i++) {
      if (pass.charAt(i) === passChar) {
        passCount++;
      }
    }
    if (passCount <= maximum && passCount >= minimum) {
      totalValidCount++;
    }
  });
  return totalValidCount;
}

function getValidPasswordsCount(passwordsArray) {
  let count = 0;

  passwordsArray.forEach((passwordToTest) => {
    const splitRegex = new RegExp(/[\s:-]+/);
    const passwordRule = passwordToTest.split(splitRegex);
    const minimum = parseInt(passwordRule[0]);
    const maximum = parseInt(passwordRule[1]);
    const passwordChar = passwordRule[2];
    const password = passwordRule[3].trim();
    const regex = new RegExp(`(.*${passwordChar}.*){${minimum},${maximum}}`);

    const isValidPassword = regex.test(password);

    if (isValidPassword) {
      count++;
    }
  });

  return count;
}

function passwordPoliciesPartTwo() {
  const passwords = getInput();

  let totalValidCount = 0;

  passwords.forEach((password) => {
    const firstPosition = password[0];
    const secondPosition = password[1];
    const passChar = password[2];
    const pass = password[3];

    const isValidPassword = isValidPosition(
      pass,
      firstPosition,
      secondPosition,
      passChar
    );
    if (isValidPassword) {
      totalValidCount++;
    }
  });
  return totalValidCount;
}

function isValidPosition(
  password,
  firstPosition,
  secondPosition,
  passwordChar
) {
  const charAtFirstPosition =
    password.charAt(firstPosition - 1) === passwordChar;
  const charAtSecondPosition =
    password.charAt(secondPosition - 1) === passwordChar;
  if (charAtFirstPosition && charAtSecondPosition) {
    return false;
  } else if (charAtFirstPosition || charAtSecondPosition) {
    return true;
  }
  return false;
}

module.exports = {
  getValidPasswordsCount,
  notReallyWhatIAmHappyAboutSolution,
  passwordPoliciesPartTwo,
};
