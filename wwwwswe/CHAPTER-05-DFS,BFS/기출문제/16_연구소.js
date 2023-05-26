// 특명! 바이러스를 막아라!
// 연구소의 크기는 n X m 직사각형 나타낼 수 있으며 직사각형은 1 X 1 크기의 정사각형으로 나누어져 있음
// 빈칸, 벽으로 이루어져 있으며 벽은 칸 하나를 모두 차지
// 일부 칸은 바이러스가 존재, 상화좌우로 인접한 빈칸으로 모두 퍼져나갈 수 있음
// 새로 세울 수 있는 벽의 개수는 3개이며, 꼭 3개를 세워야함
// 0은 빈칸, 1은 벽, 2는 바이러스가 있는 곳
// 벽을 세우고 바이러스가 퍼질 수 없는 0의 갯수를 구해야함

// 즉 3개의 벽을 이용해 최대한 0을 많이 구해야함
// BFS사용

// 앞선 음료수 얼려먹기와 비슷하면서 땅따먹기 비슷?

function solution(n, m, lab) {
  const dx = [-1, 1, 0, 0]; // 상하좌우 이동을 위한 x 방향 배열
  const dy = [0, 0, -1, 1]; // 상하좌우 이동을 위한 y 방향 배열
  let maxSafeZone = 0; // 안전 영역의 최대 크기 변수

  // 바이러스 퍼뜨리기
  function spreadVirus(labCopy) {
    const queue = []; // 바이러스 퍼뜨리기 위한 큐
    const visited = Array.from(Array(n), () => Array(m).fill(false)); // 방문 여부 확인을 위한 2차원 배열

    // 초기 바이러스 위치 큐에 삽입 및 방문 처리
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (labCopy[i][j] === 2) {
          queue.push([i, j]);
          visited[i][j] = true;
        }
      }
    }

    // 바이러스 퍼뜨리기
    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 범위를 벗어나거나 이미 방문했거나 벽인 경우 무시
        if (
          nx < 0 ||
          nx >= n ||
          ny < 0 ||
          ny >= m ||
          visited[nx][ny] ||
          labCopy[nx][ny] === 1
        ) {
          continue;
        }

        // 빈칸인 경우 바이러스를 퍼뜨리고 큐에 삽입
        visited[nx][ny] = true;
        labCopy[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  // 안전 영역 크기 구하기
  function getSafeZone(labCopy) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (labCopy[i][j] === 0) {
          count++;
        }
      }
    }
    return count;
  }

  // 벽 설치하기
  function buildWalls(labCopy, count) {
    if (count === 3) {
      const labTemp = JSON.parse(JSON.stringify(labCopy)); // labCopy를 복사하여 변경사항이 원래 배열에 영향을 주지 않도록 함
      spreadVirus(labTemp); // 바이러스 퍼뜨리기
      maxSafeZone = Math.max(maxSafeZone, getSafeZone(labTemp)); // 안전 영역 크기 갱신
      return;
    }

    // 빈칸에 벽 설치
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (labCopy[i][j] === 0) {
          labCopy[i][j] = 1; // 벽 설치
          buildWalls(labCopy, count + 1); // 다음 벽 설치를 위해 재귀 호출
          labCopy[i][j] = 0; // 설치한 벽 제거 (백트래킹)
        }
      }
    }
  }

  buildWalls(lab, 0); // 벽 설치 시작
  return maxSafeZone;
}

const n = 7;
const m = 7;
const lab = [
  [2, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 2, 0],
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
];

console.log(solution(n, m, lab)); // 27
