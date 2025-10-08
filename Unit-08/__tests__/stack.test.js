const Stack = require("../stack");

describe("Stack", () => {
  test("push와 pop이 작동한다", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test("peek은 값을 제거하지 않는다", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.peek()).toBe(1);
  });

  test("isEmpty가 작동한다", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("size가 작동한다", () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    stack.pop();
    expect(stack.size()).toBe(1);
  });

  test("빈 스택에서 pop하면 undefined", () => {
    const stack = new Stack();
    expect(stack.pop()).toBeUndefined();
  });
});
