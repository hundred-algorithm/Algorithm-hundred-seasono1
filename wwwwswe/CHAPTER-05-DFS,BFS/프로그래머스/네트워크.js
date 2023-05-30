// https://school.programmers.co.kr/learn/courses/30/lessons/43162

//   a  b  c    a  b  c    a  b  c
// [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
// A - B 연결, B - C 연결이 되어있을 경우, A - B - C 로 연결되어 있기 때문에 A와 C도 간접적으로 연결되어 하나의 네트워크 상에 있다고 할 수 있음

// 네트워크가 어디까지 연결되어있는지 확인해야함으로 DFS 사용

function solution(n, computers) {
  let answer = 0;
  const visited = new Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(solution(n, computers)); // 2
