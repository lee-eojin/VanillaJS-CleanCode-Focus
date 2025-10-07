function bubbleSort(arr) {
  const sorted = [...arr];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }

  return sorted;
}

function binarySearch(sortedArr, target) {

}

module.exports = {
  bubbleSort,
  binarySearch
};
