const { generateRandomDigits, judge } = require("./baseballGame");
const { createInterface, question, close } = require("./console");
const { isValidInput, parseInput } = require("./validator");

async function playGame() {
  // TODO: 게임 플로우 구현
  // 1. readline interface 생성
  // 2. 정답 생성
  // 3. 게임 시작 메시지 출력
  // 4. 입력 루프 (입력 → 검증 → 판정 → 결과 출력)
  // 5. 정답 맞추면 종료
}

module.exports = { playGame };
