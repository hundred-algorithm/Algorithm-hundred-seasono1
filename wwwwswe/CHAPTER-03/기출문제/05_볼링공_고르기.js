// 볼링공 갯수 : N
// arr : 각각 볼링공의 무게
// M : 1~M까지의 자연수 즉 arr에 들어갈 수 있는 볼링공 무게의 최댓값

// 이 문제에서 볼링공의 무게는 중요하지 않음 -> 무게가 같아도 인덱스가 다르면 다른 공이기 때문
    // 볼링공이 5개가 있고 그럼 1번부터 5번까지 있을때 두명이 고를 수 있는 모든 경우의 수를 구하면 됨
    // 즉 N에의 갯수에서 두개로 묶을 수 있는 모든 경우의 수를 구함


    function bowlingBall(N, M, arr) {
        // 초기값 설정
        let count = 0;
      
        for (let i = 0; i < N; i++) { // 첫번째 공을 선택
            for (let j = i + 1; j < N; j++) { // 첫 번째 볼링공 다음인 i+1번째(두번째) 볼링공부터 마지막 볼링공까지 선택
                if (arr[i] !== arr[j]) { // arr의 i와 j의 인덱스가 다를 경우
                    count ++ // count를 증가
                }
            }
        }
        return count;
      }
      
      
      const N = 5;
      const M = 3;
      const arr = [1, 3, 2, 3, 2];
      
      console.log(bowlingBall(N, M, arr)); // 8