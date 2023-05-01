// N * M 크기의 직사각형, 각각의 칸은 육지 OR 바다
// 캐릭터는 동서남북 중 한 곳을 바라봄


// 맵에서 바다로 되어 있는 공간에는 갈 수 없음

function getTreasureHuntResult(n, m, x, y, direction, array) {
    // 방문한 위치를 저장하기 위한 맵을 생성하여 0으로 초기화
    const d = Array.from(Array(n), () => new Array(m).fill(0));
    d[x][y] = 1; // 현재 좌표 방문 처리
  
    // 북, 동, 남, 서 방향 정의
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
  
    // 왼쪽으로 회전
    function turn_left() {
      direction -= 1;
      if (direction === -1) {
        direction = 3;
      }
    }
  
    // 시뮬레이션 시작
    let count = 1;
    let turn_time = 0;
    while (true) {
      // 왼쪽으로 회전
      turn_left();
      const nx = x + dx[direction];
      const ny = y + dy[direction];
      // 회전한 이후 정면에 가보지 않은 칸이 존재하는 경우 이동
      if (d[nx][ny] === 0 && array[nx][ny] === 0) {
        d[nx][ny] = 1;
        x = nx;
        y = ny;
        count += 1;
        turn_time = 0;
        continue;
      }
      // 회전한 이후 정면에 가보지 않은 칸이 없거나 바다인 경우
      else {
        turn_time += 1;
      }
      // 네 방향 모두 갈 수 없는 경우
      if (turn_time === 4) {
        const nx = x - dx[direction];
        const ny = y - dy[direction];
        // 뒤로 갈 수 있다면 이동하기
        if (array[nx][ny] === 0) {
          x = nx;
          y = ny;
        }
        // 뒤가 바다로 막혀있는 경우
        else {
          break;
        }
        turn_time = 0;
      }
    }
  
    // 정답 반환
    return count;
  }
  
  const n = 4;
  const m = 4;
  const x = 1;
  const y = 1;
  const direction = 0;
  const array = [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ];
  
  console.log(getTreasureHuntResult(n, m, x, y, direction, array)); // 3
  