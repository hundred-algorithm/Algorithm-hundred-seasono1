// n X m 크기의 직사각형 형태의 미로
// 동빈이의 위치 1,1 출구는 n,m
// 괴물을 피해 탈출해야하는데 괴물이 있는 곳은 0, 없는 곳은 1로 표시
// 한번에 한칸씩 이동할 수 있으며 탈출까지 이동하는 총 칸의 횟수를 구함
// 시작 칸과 마지막 칸도 횟수에 모두 포함 +2

// BFS 사용
// 이동할 칸에 괴물이 있는지 확인하고 이동해야 더 빠르게 구할 수 있음

function bfs(x, y, graph) {
  const n = graph.length;
  const m = graph[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [];
  queue.push([x, y]);

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      if (graph[nx][ny] === 0) {
        continue;
      }

      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return graph[n - 1][m - 1];
}

// 입력값 예시
const input = "5 6\n101010\n111111\n000001\n111111\n111111\n";
const inputLines = input.trim().split("\n");

const [n, m] = inputLines[0].split(" ").map(Number);
const graph = inputLines.slice(1).map((line) => line.split("").map(Number));

const result = bfs(0, 0, graph);
console.log(result); // 정답 출력
