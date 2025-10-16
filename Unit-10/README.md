# Day 10 - Map/Set 활용, 로또 통계

## 문제 설명

여러 회차의 로또 번호 데이터를 분석하여 **번호별 출현 빈도** 를 계산하고, **가장 많이 나온 번호** 를 찾으세요.
또한 배열에서 **중복된 요소** 를 찾는 함수도 구현합니다. `Map`과 `Set` 자료구조를 적극 활용하세요.

---

## 학습 목표
- Map 자료구조 사용법 익히기
- Set 자료구조 사용법 익히기
- 빈도 계산, 중복 제거 로직

## 요구사항

### 기능 요구사항

1. `countFrequency(lottoNumbers)`: 번호별 출현 횟수 계산
   - 입력: 로또 번호 배열 (여러 회차)
   - 출력: `Map` (번호 → 횟수)

2. `findMostFrequent(lottoNumbers)`: 가장 많이 나온 번호
   - 입력: 로또 번호 배열
   - 출력: 최다 출현 번호 배열 (동점이면 모두 포함)

3. `findDuplicates(arr)`: 중복 요소 찾기
   - 입력: 배열
   - 출력: 중복된 요소 배열 (중복 없으면 빈 배열)

### 예시
```javascript
const numbers = [1, 2, 3, 1, 2, 1];

countFrequency(numbers);
// Map { 1 => 3, 2 => 2, 3 => 1 }

findMostFrequent(numbers);
// [1]

findDuplicates(numbers);
// [1, 2]
```

## 힌트
- **Map**: `set()`, `get()`, `has()` 메서드 활용
- **Set**: 중복 제거에 유용, `has()`, `add()` 사용
- 최댓값 찾기: `Math.max()`, `Array.from()` 활용

## 테스트 실행
```bash
npm test Day-10
```