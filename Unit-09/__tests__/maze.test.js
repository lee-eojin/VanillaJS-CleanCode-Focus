const { findPathDFS, findPathBFS } = require("../maze");

describe("미로 탐색", () => {
  const maze1 = [
    [0, 0, 1],
    [0, 0, 0],
    [1, 0, 0]
  ];

  const maze2 = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];

  const maze3 = [
    [0, 1],
    [1, 0]
  ];

  describe("findPathDFS", () => {
    test("경로가 있으면 true", () => {
      expect(findPathDFS(maze1)).toBe(true);
      expect(findPathDFS(maze2)).toBe(true);
    });

    test("경로가 없으면 false", () => {
      expect(findPathDFS(maze3)).toBe(false);
    });

    test("1x1 미로", () => {
      expect(findPathDFS([[0]])).toBe(true);
    });
  });

  describe("findPathBFS", () => {
    test("최단 경로 길이를 반환", () => {
      expect(findPathBFS(maze1)).toBe(5);
      expect(findPathBFS(maze2)).toBe(5);
    });

    test("경로가 없으면 -1", () => {
      expect(findPathBFS(maze3)).toBe(-1);
    });

    test("1x1 미로", () => {
      expect(findPathBFS([[0]])).toBe(1);
    });
  });
});