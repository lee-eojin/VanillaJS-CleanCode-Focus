const DIRECTIONS = [[0,1], [1,0], [0,-1], [-1,0]];

function findPathDFS(maze) {
  const rows = maze.length;
  const cols = maze[0].length;
  const endRow = rows - 1;
  const endCol = cols - 1;

  const visited = [];
  for (let i = 0; i < rows; i++) {
    visited[i] = [];
    for (let j = 0; j < cols; j++) {
      visited[i][j] = false;
    }
  }

  function dfs(row, col) {
    if (row === endRow && col === endCol) {
      return true;
    }

    visited[row][col] = true;

    for (let i = 0; i < DIRECTIONS.length; i++) {
      const nextRow = row + DIRECTIONS[i][0];
      const nextCol = col + DIRECTIONS[i][1];

      if (nextRow >= 0 && nextRow < rows &&
          nextCol >= 0 && nextCol < cols &&
          maze[nextRow][nextCol] === 0 &&
          !visited[nextRow][nextCol]) {
        if (dfs(nextRow, nextCol)) {
          return true;
        }
      }
    }

    return false;
  }

  return dfs(0, 0);
}

function findPathBFS(maze) {
  // 여기에 구현하세요
}

module.exports = {
  findPathDFS,
  findPathBFS
};
