# Unit 02 - 문자열 계산기 (기본)

## 📌 문제 설명

쉼표(`,`) 또는 콜론(`:`)으로 구분된 숫자 문자열을 받아서 모든 숫자의 합을 계산하는 `add` 함수를 작성하세요.
빈 문자열은 0을 반환하고, 음수가 포함되면 에러를 발생시켜야 합니다.

---

## 🎯 학습 목표
- 문자열 파싱 연습
- 함수 분리 및 단일 책임 원칙 적용
- 예외 처리 (음수, 잘못된 입력)
- 상수를 활용한 매직 넘버 제거

## 📝 요구사항

### 기능 요구사항
1. `splitNumbers(text)`: 문자열을 구분자로 분리하여 배열 반환
2. `toNumber(str)`: 문자열을 숫자로 변환 (음수면 에러)
3. `sum(numbers)`: 숫자 배열의 합 계산
4. `add(text)`: 전체 로직 통합

### 구분자
- 쉼표(`,`) 또는 콜론(`:`) 사용
- 기본 구분자는 상수로 정의: `DEFAULT_DELIMITER = /,|:/`

### 예외 처리
- 음수 입력 시: `throw new Error("invalid number: " + str)`
- 숫자가 아닌 값: `throw new Error("invalid number: " + str)`

### 예시
```javascript
add("1,2:3")  // 6
add("1,2,3")  // 6
add("1:2:3")  // 6
add("")       // 0
add("1,-2")   // Error
```

## 💡 힌트
- `String.split()` 사용
- `Number()`, `Number.isNaN()` 활용
- `Array.reduce()` 또는 반복문으로 합 계산

## 🧪 테스트 실행
```bash
npm test Unit-02
```
