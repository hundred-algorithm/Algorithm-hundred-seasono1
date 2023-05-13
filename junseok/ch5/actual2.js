//
const map = [
  [2, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 2, 0],
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
];
let result = 0;

function dfs(count) {
  if (count === 3) {
    const blank = map.map(() => new Array(map[0].length).fill(0));
    // 맵 정보 복사하기
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        blank[i][j] = map[i][j];
      }
    }
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (blank[i][j] === 2) virus(blank, i, j);
      }
    }

    result = Math.max(result, safe(blank));
    return;
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 0) {
        map[i][j] = 1;
        count += 1;
        dfs(count);
        map[i][j] = 0;
        count -= 1;
      }
    }
  }
}

// 바이러스 전파시키기
function virus(map, x, y) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const hor = map[0].length;
  const ver = map.length;
  for (let i = 0; i < dx.length; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < ver && ny >= 0 && ny < hor && map[nx][ny] === 0) {
      map[nx][ny] = 2;
      virus(map, nx, ny);
    }
  }
}

// 안전구역 세기
function safe(map) {
  let safeCount = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 0) safeCount += 1;
    }
  }
  return safeCount;
}

dfs(0);

console.log(result);
