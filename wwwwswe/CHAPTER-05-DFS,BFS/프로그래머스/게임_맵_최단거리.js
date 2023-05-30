// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// (1, 1) 위치에서 (n, m)위치까지의 최단 거리를 구해야함
// 0은 벽, 1은 벽이 없는 자리
// 상대 팀 진영에 도착할 수 없을 때는 -1을 return
// 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return
// map을 벗어날 수는 없음

// BFS 사용

function solution(maps) {
  const n = maps.length; // 행의 개수
  const m = maps[0].length; // 열의 개수

  const dx = [-1, 1, 0, 0]; // 상하좌우 이동 방향
  const dy = [0, 0, -1, 1];

  // 방문 여부와 거리를 저장할 배열
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  const distance = Array.from(Array(n), () => Array(m).fill(0));

  // 상대 팀 진영까지의 최단 거리를 구하는 BFS 함수
  function bfs(startX, startY) {
    const queue = [];
    queue.push([startX, startY]);
    visited[startX][startY] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (maps[nx][ny] === 1 && !visited[nx][ny]) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
            distance[nx][ny] = distance[x][y] + 1;
          }
        }
      }
    }
  }

  // 시작 위치부터 BFS 수행
  bfs(0, 0);
  게임_맵_최단거리;
  // 상대 팀 진영에 도달하지 못한 경우 -1 반환
  if (!visited[n - 1][m - 1]) {
    return -1;
  }

  // 상대 팀 진영까지의 최단 거리 반환
  return distance[n - 1][m - 1] + 1;
}

// 테스트 예시
const maps1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps1)); // 11

const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps2)); // -1
