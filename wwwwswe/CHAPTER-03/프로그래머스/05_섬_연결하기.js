// n : 섬의 개수
// costs : 다리 건설 비용
// 최소 비용으로 모든 섬이 통행 가능하도록 최소비용을 구함

// 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 본다
    //A-B, B-C이 일경우 A-B-C로 이동할 수 있으니 통행 가능

// costs : [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]가 들어올때
    // 0번째와 1번째 섬을 연결하는데 필요한 비용은 1
    // 0번째와 2번째 섬을 연결하는데 필요한 비용은 2
    // ...
    // 2번째와 3번째 섬을 연결하는데 필요한 비용은 8 로 해석

    // 총 섬은 0,1,2,3의 섬이 있음   
// 크루스칼 알고리즘을 활용하라고 나옴 https://ko.wikipedia.org/wiki/%ED%81%AC%EB%9F%AC%EC%8A%A4%EC%BB%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98

    function solution(n, costs) {
        // 각 섬이 속한 집합 정보를 나눠서 담음
        const parent = new Array(n).fill().map((_, idx) => idx);
      
        // 비용이 낮은 순서대로 정렬
        costs.sort((a, b) => a[2] - b[2]);
      
        let answer = 0;
      
        for (let i = 0; i < costs.length; i++) {
          const [from, to, cost] = costs[i];
      
          // 두 섬이 같은 집합에 속하는지 확인
          // 해당 섬이 속한 집합의 대표 번호를 반환
          const fromParent = find(from);
          const toParent = find(to);
      
          // 두 섬이 같은 집합에 속하지 않으면, 두 집합을 합치고 비용을 더함
          if (fromParent !== toParent) {
            union(fromParent, toParent);
            answer += cost;
          }
      
          // 모든 섬이 같은 집합에 속하면 최소 신장 트리를 완성함
          if (parent.filter((v, i) => v === i).length === 1) {
            break;
          }
        }
      
        // 두 섬이 속한 집합을 합침
        function union(a, b) {
          parent[b] = a;
        }
      
        // 해당 섬이 속한 집합을 찾음
        function find(x) {
          if (parent[x] === x) {
            return x;
          }
      
          return (parent[x] = find(parent[x]));
        }
      
        return answer;
      }
      