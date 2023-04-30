//게임 개발
function solution(N, M, start, MAP) {
  const hor = new Array(M).fill(0);
  const ver = new Array(N).fill(0);
  for (let i = 0; i < hor.length; i++) {
    hor[i] = [...ver];
  }
  const copyMap = hor;

  //북 동 서 남
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let direction = start[2];
  let x = start[0];
  let y = start[1];
  console.log(x, y);
  // 시작 한곳 가본 처리 하기
  copyMap[x][y] = 1;
  console.log(copyMap);
  let count = 1;
  let turn_time = 0;
  //시뮬레이션 시작
  while (true) {
    direction = turnLeft(direction);
    let nx = x + dx[direction];
    let ny = y + dy[direction];

    if (MAP[nx][ny] === 0 && copyMap[nx][ny] === 0) {
      copyMap[nx][ny] = 1;
      x = nx;
      y = ny;
      count += 1;
      turn_time = 0;
      continue;
    } else {
      turn_time += 1;
    }
    if (turn_time === 4) {
      nx = x - dx[direction];
      ny = y - dy[direction];
      if (MAP[nx][ny] === 0) {
        x = nx;
        y = ny;
      } else {
        break;
      }
      turn_time = 0;
    }
  }
  console.log(copyMap);
  return count;
}

// 왼쪽으로 회전
function turnLeft(direction) {
  direction -= 1;
  if (direction === -1) {
    return 3;
  }
  return direction;
}
console.log(
  solution(
    4,
    4,
    [1, 1, 0],
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
    ]
  )
);
