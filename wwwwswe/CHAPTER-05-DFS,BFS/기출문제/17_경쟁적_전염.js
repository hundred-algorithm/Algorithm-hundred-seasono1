// n X n 크기의 시험관이 있으며 시험관은 1 X 1 크기의 칸으로 나누어짐
// 특정한 위치에는 바이러스가 존재할 수 있음, 바이러스의 종류는 1 ~ k번까지 k가지가 있으며 모든 바이러스는 이 중 하나에 속함
// 시험관에 존재하는 바이러스는 1초마다 상하좌우 방향으로 증식, 매초 번호가 낮은 종류부터 증식 -> 즉 칸에 증식할 수 있는 우선순위가 번호가 낮은 바이러스가 높음
// 특정칸에 이미 바이러스가 존재할 경우 바이러스 증식 불가
// s초가 지났을 경우 x,y칸에 존재하는 바이러스를 출력, 만약 해당칸에 바이러스가 없으면 0을 출력

// 상하좌우로 펄쳐야 하니 BFS사용

function spreadVirus(n, k, lab, s, x, y) {
  // 방향 (상, 하, 좌, 우)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 시험관 초기화
  const laboratory = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      laboratory[i][j] = lab[i][j];
    }
  }

  // 바이러스 위치를 저장할 배열
  const virusPositions = [];

  // 바이러스 위치 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (laboratory[i][j] !== 0) {
        virusPositions.push([laboratory[i][j], i, j]);
      }
    }
  }

  // 번호가 낮은 순으로 정렬
  virusPositions.sort((a, b) => a[0] - b[0]);

  // 주어진 시간(s)동안 바이러스를 퍼뜨림
  for (let time = 0; time < s; time++) {
    for (let i = 0; i < virusPositions.length; i++) {
      const [virus, vx, vy] = virusPositions[i];
      for (let j = 0; j < 4; j++) {
        const nx = vx + dx[j];
        const ny = vy + dy[j];
        // 범위를 벗어나거나 이미 바이러스가 있는 경우 건너뜀
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || laboratory[nx][ny] !== 0)
          continue;
        laboratory[nx][ny] = virus; // 바이러스 증식
        virusPositions.push([virus, nx, ny]); // 새로운 바이러스 위치 추가
      }
    }
  }

  // 최종적으로 주어진 시간(s)이 지난 후 x, y 위치의 바이러스 번호 반환
  return laboratory[x - 1][y - 1];
}

// 입력값 예시
const n = 3;
const k = 3;
const lab = [
  [1, 0, 2],
  [0, 0, 0],
  [3, 0, 0],
];
const s = 2;
const x = 3;
const y = 2;

console.log(spreadVirus(n, k, lab, s, x, y)); // 3
