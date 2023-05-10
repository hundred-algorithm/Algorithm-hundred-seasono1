//BFS 너비 우선 탐색
// 가장 가까운 놈 부터 확인하기
// queue 자료 구조를 활용한다.

function BFS(graph, v, visited) {
  console.log(v);

  const queue = [];
  const array = [];
  queue.push(v);
  while (queue.length !== 0) {
    const node = queue.shift();
    if (visited[node] === false) {
      array.push(node);
      visited[node] = true;
      queue.push(...graph[node]);
    }
  }
  console.log(array);
  return array;
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
BFS(graph, 1, visited);
