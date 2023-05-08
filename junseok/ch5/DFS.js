//깊이 우선 탐색
//stack 자료 구조를 활용한다.
function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v, (end = " "));
  for (let el of graph[v]) {
    if (!visited[el]) dfs(graph, el, visited);
  }
}

const graph = [
  [],
  [2, 3, 8], // 1반 노드와 연결
  [1, 7], //2번 노드와 연결 ...
  [1, 4, 5],
  [3, 5],
  [4, 5],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = new Array(9).fill(false);
// 인덱스 0은 사용하지 않기
//노드를 모두 방문하지 않은 것으로 처리

dfs(graph, 1, visited);
