const fs = require("fs");
const path = require("path");

function getInputFromFile(inputFileName, puzzleDay, splitRule) {
    const fileRead = fs.readFileSync(
        path.join(__dirname, puzzleDay, inputFileName),
        "utf-8"
    );
    const input = fileRead.split(splitRule ? splitRule : /\r?\n/);
    return input;
}

module.exports = {getInputFromFile};
