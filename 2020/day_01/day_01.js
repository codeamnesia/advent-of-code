
function getReportExpense(arrayToMultiply) {
  return arrayToMultiply.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
}


function findTheEntrieForTheFinalSum(finalSum, report) {
  for (var i = 0; i < report.length; i++) {
    if (report[i] < finalSum) {
      const leftResult = finalSum - report[i];
      const secondPart = report.find((element) => element === leftResult);
      if (secondPart) {
        return [report[i], secondPart];
      }
    }
  }
}

function findThreeEntries(finalSum, entriesArray) {
  var sortedArray = entriesArray.sort((a, b) => {
    return a - b;
  });

  for (var i = 0; i < sortedArray.length; i++) {
    var x = sortedArray[i];
    var start = i + 1;
    var end = sortedArray.length - 1;
    var cenas = finalSum - x;
    while (start < end) {
      var startValue = sortedArray[start];
      var endValue = sortedArray[end];
      var sum = startValue + endValue;
      if (sum == cenas) {
        return [startValue, endValue, x];
      } else if (sum < cenas) {
        start++;
      } else {
        end--;
      }
    }
  }
  return [];
}

module.exports = {
  findTheEntrieForTheFinalSum,
  getReportExpense,
  findThreeEntries,
};
