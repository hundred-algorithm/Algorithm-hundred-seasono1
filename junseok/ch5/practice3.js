// 음료수 얼려 먹기
function solution(map) {
  let result = 0;
  const hor = map.length;
  const col = map[0].length;
  console.log(map);

  for (let i = 0; i < hor; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, map)) {
        result += 1;
      }
    }
  }
  return result;
}

function dfs(x, y, map) {
  if (x === -1 || x >= map.length || y === -1 || y >= map[0].length)
    return false;

  if (map[x][y] === 0) {
    map[x][y] = 1;
    dfs(x - 1, y, map);
    dfs(x + 1, y, map);
    dfs(x, y - 1, map);
    dfs(x, y + 1, map);
    return true;
  }
  return false;
}
console.log(
  solution([
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  solution([
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
  ])
);
