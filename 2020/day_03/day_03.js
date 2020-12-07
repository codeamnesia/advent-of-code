const { getInputFromFile } = require("../utils");

function countHowManyTreesAreWGoingToEncounter(rightToGo, downToGo) {
  const map = getInputFromFile("input.txt", "day_03");

  let stepsToWalk = 0;
  let finalCount = 0;
  let index = downToGo;

  while (index < map.length) {
    stepsToWalk = (stepsToWalk + rightToGo) % map[index].length;

    const charIndex = map[index].charAt(stepsToWalk);

    if (charIndex === "#") {
      finalCount++;
    }
    index += downToGo;
  }
  return finalCount;
}

function finalEncounteredTrees() {
  const trees = [
    countHowManyTreesAreWGoingToEncounter(3, 1),
    countHowManyTreesAreWGoingToEncounter(1, 1),
    countHowManyTreesAreWGoingToEncounter(5, 1),
    countHowManyTreesAreWGoingToEncounter(7, 1),
    countHowManyTreesAreWGoingToEncounter(1, 2),
  ];

  return trees.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
}

module.exports = {
  countHowManyTreesAreWGoingToEncounter,
  finalEncounteredTrees,
};
