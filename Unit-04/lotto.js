const LOTTO_MIN = 1;
const LOTTO_MAX = 45;
const LOTTO_COUNT = 6;

// 기본 랜덤 생성기 (Math.random 사용)
const defaultRandomGenerator = {
  generateNumber: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

function generateRandomNumber(min, max, randomGenerator = defaultRandomGenerator) {
  // 여기에 구현하세요
}

function generateLottoNumbers(randomGenerator = defaultRandomGenerator) {
  // 여기에 구현하세요
}

function sortNumbers(numbers) {
  // 여기에 구현하세요
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