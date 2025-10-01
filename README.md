# 자바스크립트 트레이닝 (JavaScript 순수 로직 집중)

이 저장소는 **비전공자 → 개발자 사고 전환**을 목표로 한 단기간 집중 훈련 과정입니다.
DOM, 프론트엔드 UI 대신 **순수 로직 / 함수 분리 / 클린 코드 / 테스트 기반 개발**에 초점을 맞추었습니다.

**우테코 프리코스, 소마, SSAFY** 등의 코딩 테스트를 준비하기 전,
워밍업과 기본기 다지기에 적합합니다.

---

## 목표
- 문제를 **작게 쪼개고 함수 단위로 해결하는 습관** 기르기  
- 매직 넘버/문자 제거, 의미 있는 변수/함수명 사용  
- Jest를 활용한 **테스트 주도 개발(TDD)** 경험  
- 14 Unit을 통해 **개발자식 사고**로 전환  

---

## 학습 커리큘럼

### Week 1 – 순수 로직 & 함수적 사고
- **Unit 01**: 문자열 뒤집기, 배열 합/최댓값
- **Unit 02**: 문자열 계산기 (기본, 구분자 , :)
- **Unit 03**: 문자열 계산기 (확장, 커스텀 구분자)
- **Unit 04**: 로또 번호 생성기
- **Unit 05**: 숫자 야구 게임
- **Unit 06**: 정렬 & 탐색 (버블정렬, 이진탐색)
- **Unit 07**: 리팩토링 및 1주차 종합

### Week 2 – 자료구조/알고리즘 & 미니 프로젝트
- **Unit 08**: Stack & Queue, 괄호 유효성 검사
- **Unit 09**: DFS/BFS, 미로 탐색 ⚠️ *조금 어려울 수 있음 - Unit 10 먼저 해도 OK*
- **Unit 10**: Map/Set 활용, 로또 통계
- **Unit 11**: 슬라이딩 윈도우, 투포인터 ⚠️ *조금 어려울 수 있음 - Unit 12 먼저 해도 OK*
- **Unit 12**: 장바구니 로직 (순수 함수형)
- **Unit 13**: 코드 리팩토링
- **Unit 14**: 최종 콘솔 프로젝트 (문자열 계산기 + 장바구니 + 로또)

---

## 코딩 컨벤션 / 문제 풀이 규칙

이 훈련에서는 단순히 정답만 맞추는 것이 아니라 **개발자식 사고와 클린 코드 습관**을 익히는 것을 목표로 합니다.  
따라서 모든 문제 풀이에서 아래 규칙을 지킵니다.

### 기본 규칙
- **`var` 사용 금지** → 항상 `const` / `let`  
- **`else if` / `else` 지양** → 가급적 조기 `return` 으로 흐름 단순화  
- **함수는 한 가지 역할만** 수행 (SRP 원칙)  
- **의미 있는 이름** 사용 (예: `arr` 대신 `numbers`, `str` 대신 `inputText`)  
- **매직 넘버/문자 제거** → 상수로 정의 (`const MAX_SIZE = 6;`)  
- **테스트 우선**: 문제 풀기 전에 Jest 테스트부터 작성  

### 코드 스타일
- 들여쓰기: 2칸  
- 함수 길이: 10줄 이내 권장  
- 화살표 함수는 **간단한 콜백**일 때만 사용  
- 나머지는 명확성을 위해 일반 함수 선언 사용  

### 예외 처리
- 입력값이 잘못되면 `throw new Error(...)`  
- 빈 배열, 빈 문자열 등 **엣지 케이스 테스트** 필수 작성  

---

## 실행 방법

```bash
# 1. 레포 클론
git clone https://github.com/lee-eojin/14days-soft-training.git
cd 14days-soft-training

# 2. 패키지 설치
npm install

# 3. Unit-01부터 시작
cd Unit-01
# README 읽고 구현 → npm test로 확인
```

---

## ❓ FAQ (자주 하는 실수)

<details>
<summary><b>Q. 테스트가 통과하는데 답이 맞는지 모르겠어요</b></summary>

테스트 코드를 읽어보세요! 테스트는 **요구사항 명세서**입니다.
- 어떤 입력에 어떤 출력이 나와야 하는지
- 예외 상황은 어떻게 처리해야 하는지

모두 테스트 코드에 있습니다.
</details>

<details>
<summary><b>Q. `var`를 쓰면 안 되나요?</b></summary>

저도 'var'로 공부를 시작해서 습관을 고치는게 오래걸렸습니다.
우테코/소마 등 실전 코딩 테스트에서는 `var` 사용을 권장하지 않습니다.
- `const`: 재할당 불가 (기본값)
- `let`: 재할당 필요할 때만

함수 스코프인 `var`는 예상치 못한 버그의 원인이 됩니다.
</details>

<details>
<summary><b>Q. `else`를 왜 지양하나요?</b></summary>

조기 `return`으로 분기를 줄이면 가독성이 높아집니다.

```javascript
// Bad
function validate(input) {
  if (input) {
    if (input.length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Good
function validate(input) {
  if (!input) return false;
  if (input.length === 0) return false;
  return true;
}
```
</details>

<details>
<summary><b>Q. 함수가 너무 작아지면 오히려 복잡하지 않나요?</b></summary>

저도 처음엔 그랬습니다! 하지만 반대로, 
**작은 함수 = 테스트하기 쉬운 함수**입니다.
- 각 함수가 하나의 역할만 하면 버그 추적이 쉬움
- 재사용 가능
- 함수명으로 의도를 표현 가능

익숙해지면 오히려 읽기 편합니다!
</details>

<details>
<summary><b>Q. 랜덤 함수는 어떻게 테스트하나요?</b></summary>

Unit 04 심화 섹션을 참고하세요!
- 의존성 주입으로 테스트용 RNG 전달
- 시드 기반 결정적 테스트
- 속성 기반 테스트 (fast-check)
</details>

<details>
<summary><b>Q. Unit 09, 11이 너무 어려워요</b></summary>

순서를 바꿔도 괜찮습니다!
- Unit 09(DFS/BFS) ⇒ Unit 10 먼저
- Unit 11(슬라이딩 윈도우) ⇒ Unit 12 먼저

난이도가 높은 문제는 나중에 도전하세요.
</details>

---

## 기여하기

개선 제안, 오타 수정, 새로운 문제 추가 등 모든 기여를 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: ...'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**만든이**: [@lee-eojin](https://github.com/lee-eojin)
