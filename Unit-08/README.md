# Day-08: Stack & Queue, 괄호 유효성 검사

## 문제 설명

**Stack(후입선출)** 과 **Queue(선입선출)** 자료구조를 클래스로 구현하고, Stack을 활용하여 괄호 문자열의 유효성을 검사하는 함수를 작성하세요.
괄호 검사는 `()`, `[]`, `{}`가 올바르게 열리고 닫혔는지 확인합니다.

---

## 학습 목표
- 기본 자료구조 Stack, Queue 구현
- 클래스 문법 익히기
- Stack을 활용한 괄호 유효성 검사

## 요구사항

### 1. Stack 구현
```javascript
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop(); // 2
stack.peek(); // 1
stack.isEmpty(); // false
stack.size(); // 1

// 빈 스택
const emptyStack = new Stack();
emptyStack.pop(); // undefined
emptyStack.peek(); // undefined
```

### 2. Queue 구현
```javascript
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue(); // 1
queue.front(); // 2
queue.isEmpty(); // false
queue.size(); // 1

// 빈 큐
const emptyQueue = new Queue();
emptyQueue.dequeue(); // undefined
emptyQueue.front(); // undefined
```

### 3. 괄호 유효성 검사
`isValidBracket(str)`: 괄호 문자열이 올바른지 검사
- `()`, `[]`, `{}` 세 종류 지원
- 열린 괄호는 같은 종류의 닫힌 괄호로 닫혀야 함
- 올바르면 `true`, 아니면 `false`

**예시:**
- `"()"` → `true`
- `"()[]{}"` → `true`
- `"{[()]}"` → `true`
- `"((()))"` → `true`
- `""` → `true` (빈 문자열은 올바름)
- `"(]"` → `false` (다른 종류로 닫음)
- `"([)]"` → `false` (순서가 꼬임)
- `"{{{"` → `false` (닫지 않음)
- `"}}}"`→ `false` (여는 괄호 없음)

## 힌트

### Stack/Queue 구현
- 내부적으로 배열 사용 (`this.items = []`)
- Stack: 배열의 `push()`, `pop()` 메서드 활용
- Queue: 배열의 `push()`, `shift()` 메서드 활용
- `isEmpty()`: 배열 길이가 0인지 확인
- `size()`: 배열의 `length` 반환

### 괄호 검사
- Stack 활용: 열린 괄호는 push, 닫힌 괄호는 매칭 확인 후 pop
- 매칭 테이블: 객체로 `{ '(': ')', '[': ']', '{': '}' }` 형태
- 여는 괄호 판별: `'([{'` 문자열에 포함되는지 확인
- 빈 문자열은 `true` 반환
- 끝났는데 Stack이 비어있지 않으면 `false` (열고 안 닫음)

## 테스트 실행
```bash
npm test Unit-08
```
