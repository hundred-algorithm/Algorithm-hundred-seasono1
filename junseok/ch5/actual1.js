//특정 거리의 도시 찾기
function solution(N, M, K, X, graph) {
  // N 도시의 개수
  // M 도로의 개수
  // K 거리 정보
  // X 출발 도시의 번호

  const queue = [];
  const distance = new Array(N + 1).fill(-1);
  const map = new Array(N + 1).fill(...[[]]);
  for (let i = 0; i < graph.length; i++) {
    const space = graph[i][0];
    map[space] = [...map[space], graph[i][1]];
  }

  queue.push(X);
  distance[X] = 0;

  while (queue.length !== 0) {
    const el = queue.shift();
    for (let i = 0; i < map[el].length; i++) {
      const value = map[el][i];
      if (distance[value] === -1) {
        queue.push(value);
        distance[value] = distance[el] + 1;
      }
    }
  }
  const answer = [];
  for (let i = 1; i <= distance.length; i++) {
    if (distance[i] === K) {
      answer.push(i);
      console.log(i);
    }
  }
  if (answer.length === 0) console.log(-1);
}
solution(4, 4, 2, 1, [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
]);
