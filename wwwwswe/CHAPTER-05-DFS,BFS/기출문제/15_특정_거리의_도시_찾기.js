// 1 ~ n번까지의 도시, m개의 단방향 도로
// 모든 도로의 거리는 1

// 특정 도시 x로부터 출발하여 도달할 수 있는 모든 도시중에 최단거리가 정확히 k인 모든 도시의 번호를 출력
// 출발도시 x에서 출발도시 x로 가는 최단 거리는 항상 0이라고 가정
// 최단거리 k에 부합하지 않으면 -1을 출력
// 도달할 수 있는 도시의 번호는 한 줄에 하나씩 오름차순으로 정렬

// k만큼의 최단거리를 구해야함으로 DFS 사용

function findCitiesWithShortestDistance(n, m, x, k, roads) {
  // 각 도시의 인접 도시들을 저장하기 위해 길이가 n + 1인 배열 graph를 생성
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    // i번째 도로의 시작 도시와 도착 도시를 추출하여 각각 start와 end 변수에 할당
    const [start, end] = roads[i];
    // start 도시의 인접 도시 배열에 end를 추가(단방향 도로 의미)
    graph[start].push(end);
  }

  // 출발 도시 x의 최단 거리를 0으로 설정합니다. 출발 도시로 가는 거리는 항상 0이라고 가정
  const distances = Array.from({ length: n + 1 }, () => -1);
  distances[x] = 0;

  // 최단 거리가 정확히 k인 도시들의 번호를 저장
  const result = [];

  function dfs(node, distance) {
    // 최단거리 도시에 도달했으면 다음을 수행
    if (distance === k) {
      // 최단 거리 도시를 저장
      result.push(node);
      return;
    }

    // node의 인접 도시들을 순회하는 반복문
    for (let i = 0; i < graph[node].length; i++) {
      // i번째 인접 도시 저장
      const nextNode = graph[node][i];
      if (
        // nextNode의 최단 거리가 아직 계산되지 않았거나, 현재 거리 + 1이 기존 최단 거리보다 작을 경우 다음을 수행
        distances[nextNode] === -1 ||
        distances[nextNode] > distance + 1
      ) {
        // 인접 도시 nextNode의 최단 거리를 현재 거리 + 1로 갱신
        distances[nextNode] = distance + 1;
        // 인접 도시 nextNode로 재귀적으로 dfs 함수를 호출합니다. 거리는 현재 거리 + 1로 전달
        dfs(nextNode, distance + 1);
      }
    }
  }

  // 출발 도시 x로부터 깊이 우선 탐색을 시작합니다. 초기 거리는 0으로 전달
  dfs(x, 0);

  // 만약 최단 거리가 k인 도시가 없다면 [-1]을 반환하고, 그렇지 않으면 result 배열을 오름차순으로 정렬하여 반환
  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}

// 입력값 예시
const n = 4;
const m = 4;
const x = 1;
const k = 1;
const roads = [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
];

const result = findCitiesWithShortestDistance(n, m, x, k, roads);
console.log(result.join("\n")); // 2\n3
