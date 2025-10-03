# Day 04 - 로또 번호 생성기

## 📌 문제 설명

1부터 45까지의 숫자 중에서 **중복되지 않는 6개의 로또 번호** 를 랜덤으로 생성하는 프로그램을 만드세요.
생성된 번호는 오름차순으로 정렬할 수 있어야 하며, 원본 배열은 변경하지 않아야 합니다.

---

## 🎯 학습 목표
- 랜덤 숫자 생성 로직 구현
- 중복 제거 알고리즘
- 상수를 활용한 매직 넘버 제거
- 순수 함수 작성 (원본 배열 불변성 유지)

## 📝 요구사항

### 기능 요구사항
1. `generateRandomNumber(min, max, randomGenerator)`:
   - randomGenerator를 사용해 min과 max 사이의 랜덤 정수 반환
   - randomGenerator가 없으면 기본 생성기(Math.random) 사용
   - randomGenerator.generateNumber(min, max)를 호출하는 방식으로 구현

2. `generateLottoNumbers(randomGenerator)`:
   - 1~45 사이의 중복되지 않는 숫자 6개 생성
   - randomGenerator가 없으면 기본 생성기 사용
   - generateRandomNumber에 randomGenerator를 전달

3. `sortNumbers(numbers)`:
   - 숫자 배열을 오름차순 정렬 (원본 배열 변경하지 않음)

### 제약 조건
- 로또 번호 범위: 1~45
- 생성 개수: 6개
- 중복 불가
- 매직 넘버 사용 금지 (상수로 정의)

## 💡 힌트
- `Math.random()`, `Math.floor()` 활용
- 중복 체크: `Set` 또는 `includes()` 사용
- 배열 불변성: `[...arr]` 또는 `slice()` 활용

## 🧪 테스트 실행
```bash
npm test Day-04
```

## 🎯 심화: 랜덤 의존성 제거 (선택)

랜덤 함수는 테스트하기 어렵습니다. 실전에서는 **의존성 주입** 으로 해결합니다.

### 랜덤 생성기 주입 패턴
```javascript
// 기본 사용 (Math.random)
const numbers = generateLottoNumbers();

// 테스트용 결정적 생성기
const testRng = { generateNumber: (min, max) => min };
const numbers = generateLottoNumbers(testRng);
```

### 장점
- 테스트 재현성 확보
- 엣지 케이스 검증 가능 (최소값, 최대값 등)
- 시드 기반 테스트로 버그 재현

자세한 구현은 `__tests__/lotto-deterministic.test.js` 참고