const fs = require("fs");
const path = require("path");

function getInputFromFile(inputFileName, puzzleDay) {
  const fileRead = fs.readFileSync(
    path.join(__dirname, puzzleDay, inputFileName),
    "utf-8"
  );
  const input = fileRead.split(/\r?\n/);
  return input;
}

module.exports = { getInputFromFile };
