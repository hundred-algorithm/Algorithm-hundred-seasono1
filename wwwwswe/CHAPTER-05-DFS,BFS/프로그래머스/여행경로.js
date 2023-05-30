// https://school.programmers.co.kr/learn/courses/30/lessons/43164

// 항상 "ICN" 공항에서 출발할고 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 해야함
// 즉 tickets 인천 출발 -> 다음 도착 나라 a, a 출발 -> 다음도착 나라 b일 경우 순서대로 나열되어야 함
// 인천 출발이 중복이라면 알파벳 순으로 앞선 것부터 출력

// 인천공항 출발해서 도착하는 곳을 저장하고 도착하는 곳의 나라와 동일한 단어를 배열에서 찾음
// 찾고난 후 처음과 동일하게 반복해서 return에 쌓음
// DFS 사용

function solution(tickets) {
  const answer = []; // 방문하는 공항 경로를 담을 배열

  // 그래프 생성
  const graph = {};
  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    if (graph[from]) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }

  // 각 공항의 경로를 알파벳 순서로 정렬
  for (const key in graph) {
    graph[key].sort();
  }

  // DFS를 통한 경로 탐색
  function dfs(node) {
    const destList = graph[node]; // 현재 공항에서 갈 수 있는 공항 목록

    while (destList && destList.length > 0) {
      const nextAirport = destList.shift(); // 알파벳 순서대로 방문할 다음 공항 선택
      dfs(nextAirport); // 다음 공항으로 재귀적으로 이동
    }

    answer.unshift(node); // 경로의 맨 앞에 현재 공항 추가
  }

  dfs("ICN"); // "ICN" 공항에서 출발

  return answer;
}

const tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

console.log(solution(tickets)); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
