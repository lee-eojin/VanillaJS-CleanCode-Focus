function countFrequency(lottoNumbers) {
  const map = new Map();

  for (let num of lottoNumbers) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }

  return map;
}

function findMostFrequent(lottoNumbers) {
  const freqMap = countFrequency(lottoNumbers);
  const maxCount = Math.max(...freqMap.values());

  const result = [];
  for (let [num, count] of freqMap.entries()) {
    if (count === maxCount) {
      result.push(num);
    }
  }

  return result;
}

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

module.exports = {
  countFrequency,
  findMostFrequent,
  findDuplicates
};