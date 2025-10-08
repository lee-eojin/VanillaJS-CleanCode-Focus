const Queue = require("../queue");

describe("Queue", () => {
  test("enqueue와 dequeue가 작동한다", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  test("front는 값을 제거하지 않는다", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front()).toBe(1);
    expect(queue.front()).toBe(1);
  });

  test("isEmpty가 작동한다", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test("size가 작동한다", () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    queue.dequeue();
    expect(queue.size()).toBe(1);
  });

  test("빈 큐에서 dequeue하면 undefined", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeUndefined();
  });
});
