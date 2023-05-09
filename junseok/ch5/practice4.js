// 미로 탈출
function solution(map, n, m) {
  //상하좌우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let startX = 0;
  let startY = 0;

  const queue = [];
  queue.push([startX, startY]);

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    // 상하좌우 비교하기
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 공간을 벗어날 경우 무시
      if (nx < 0 || nx >= map.length || ny < 0 || ny >= map[0].length) continue;
      // 벽인 경우 무시
      if (map[nx][ny] === 0) continue;

      if (map[nx][ny] === 1) {
        map[nx][ny] = map[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  console.log(map);
  return map[n - 1][m - 1];
}
console.log(
  solution(
    [
      [1, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
    ],
    5,
    6
  )
);
