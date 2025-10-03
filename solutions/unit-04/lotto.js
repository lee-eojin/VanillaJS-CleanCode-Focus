const LOTTO_MIN = 1;
const LOTTO_MAX = 45;
const LOTTO_COUNT = 6;

const defaultRandomGenerator = {
  generateNumber: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

function generateRandomNumber(min, max, randomGenerator = defaultRandomGenerator) {
  return randomGenerator.generateNumber(min, max);
}

function generateLottoNumbers(randomGenerator = defaultRandomGenerator) {
  const numbers = new Set();

  while (numbers.size < LOTTO_COUNT) {
    const num = generateRandomNumber(LOTTO_MIN, LOTTO_MAX, randomGenerator);
    numbers.add(num);
  }

  return Array.from(numbers);
}

function sortNumbers(numbers) {
  const copy = [...numbers];
  copy.sort((a, b) => a - b);
  return copy;
}

module.exports = {
  generateRandomNumber,
  generateLottoNumbers,
  sortNumbers,
  defaultRandomGenerator,
  LOTTO_MIN,
  LOTTO_MAX,
  LOTTO_COUNT
};
