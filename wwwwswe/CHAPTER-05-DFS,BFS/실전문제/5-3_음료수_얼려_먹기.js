// n X m  크기의 얼음틀
// 구멍이 뚫여 있는 부분은 0, 칸막이가 존재하는 부분은 1
// 구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙어있는 경우 서로 연결되어 있는 것으로 간주
// 생성할 수 있는 아이스크림의 갯수를 구하기
// 칸막이가 없는 0의 갯수를 구함 (0끼리 상하좌우 붙어있는 경우 하나로 간주)

// DFS 사용
// 0칸이 이어져 있는 부분을 모두 확인해야함

function dfs(x, y, graph) {
  const n = graph.length;
  const m = graph[0].length;

  if (x < 0 || x >= n || y < 0 || y >= m) {
    return false;
  }

  if (graph[x][y] === 0) {
    graph[x][y] = 1;
    dfs(x - 1, y, graph);
    dfs(x, y - 1, graph);
    dfs(x + 1, y, graph);
    dfs(x, y + 1, graph);
    return true;
  }

  return false;
}

function countIceCream(graph) {
  const n = graph.length;
  const m = graph[0].length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j, graph)) {
        result++;
      }
    }
  }

  return result;
}

// 입력값 예시
const input = "3 3\n001\n010\n101\n";
const inputLines = input.trim().split("\n");

const [n, m] = inputLines[0].split(" ").map(Number);
const graph = inputLines.slice(1).map((line) => line.split("").map(Number));

const result = countIceCream(graph);
console.log(result); // 정답 출력
