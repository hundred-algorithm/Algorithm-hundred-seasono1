function solution(N, apple, rotation) {
  // 지도그리기
  const hor = new Array(N + 1).fill(0);
  const map = hor.map((item) => [...hor]);

  //사과채우기

  for (let z = 0; z < apple.length; z++) {
    const [appleX, appleY] = apple[z];
    map[appleX][appleY] = 1;
  }

  //방향
  let direction = 0;

  //회전 정보
  let index = 0;

  // 뱀이 시작하는 부분 표기하기
  let x = 1;
  let y = 1;
  //뱀이 차지하고 있는 위치 정보 꼬리가 앞쪽
  const q = [[x, y]]; //(queue 만들기)

  // 동남 서북
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  // 시간
  let time = 0;

  while (true) {
    let nx = x + dx[direction];
    let ny = y + dy[direction];
    //2번은 뱀이 위치한 장소
    if (1 <= nx && 1 <= ny && nx <= N && ny <= N && map[nx][ny] !== 2) {
      //사과가 없을 경우
      if (map[nx][ny] === 0) {
        map[nx][ny] = 2;
        q.push([nx, ny]);
        const [qx, qy] = q[0];
        map[qx][qy] = 0;
        q.shift();
      } // 사과가 있을 경우
      if (map[nx][ny] === 1) {
        map[nx][ny] = 2;
        q.push([nx, ny]);
      } // 벽에 만났을 때
    } else {
      time += 1;
      break;
    }
    // 다음 위치로 이동
    x = nx;
    y = ny;
    time += 1;
    if (index < rotation.length && time === rotation[index][0]) {
      direction = rotate(direction, rotation[index][1]);
      index += 1;
    }
  }
  return time;
}

// 회전 함수
function rotate(direction, C) {
  if (C === "L") {
    if (direction === 0) {
      return 3;
    } else {
      direction = direction - 1;
      return direction;
    }
  } else {
    if (direction === 3) {
      return 0;
    } else {
      direction = direction + 1;
      return direction;
    }
  }
}

console.log(
  solution(
    6,
    [
      [3, 4],
      [2, 5],
      [5, 3],
    ],
    [
      [3, "D"],
      [15, "L"],
      [17, "D"],
    ]
  )
);

console.log(
  solution(
    10,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ],
    [
      [8, "D"],
      [10, "D"],
      [11, "D"],
      [13, "L"],
    ]
  )
);
