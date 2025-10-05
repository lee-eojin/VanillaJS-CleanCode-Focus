const { DIGIT_COUNT, MIN_DIGIT, MAX_DIGIT } = require("./baseballGame");

const ERROR_MESSAGES = {
  INVALID_LENGTH: `${DIGIT_COUNT}자리 숫자를 입력해주세요.`,
  INVALID_DIGIT: `${MIN_DIGIT}~${MAX_DIGIT} 사이의 숫자만 입력 가능합니다.`,
  DUPLICATE_DIGIT: "중복된 숫자가 있습니다.",
  NOT_NUMBER: "숫자만 입력 가능합니다."
};

function isValidInput(input) {
  // TODO: implement
  return true;
}

function parseInput(input) {
  // TODO: implement
  return [];
}

module.exports = {
  isValidInput,
  parseInput,
  ERROR_MESSAGES
};
