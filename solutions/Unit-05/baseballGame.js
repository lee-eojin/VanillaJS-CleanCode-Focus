const DIGIT_COUNT = 3;
const MIN_DIGIT = 1;
const MAX_DIGIT = 9;

function generateRandomDigits() {
  const digits = [];

  while (digits.length < DIGIT_COUNT) {
    const randomNum = Math.floor(Math.random() * MAX_DIGIT) + MIN_DIGIT;
    if (!digits.includes(randomNum)) {
      digits.push(randomNum);
    }
  }
  return digits;
}

function countStrike(answer, guess) {
  let count = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === guess[i]) {
      count++;
    }
  }
  return count;
}

function countBall(answer, guess) {
  let count = 0;
  for (let i = 0; i < guess.length; i++) {
    if (answer.includes(guess[i]) && answer[i] !== guess[i]){
      count++;
    } 
  }
  return count;
}

function judge(answer, guess) {
  const strike = countStrike(answer, guess);
  const ball = countBall(answer, guess);
  
  return { strike, ball };
}

module.exports = {
  generateRandomDigits,
  countStrike,
  countBall,
  judge,
  DIGIT_COUNT,
  MIN_DIGIT,
  MAX_DIGIT
};
