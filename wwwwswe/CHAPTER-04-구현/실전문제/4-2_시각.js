// 완전 탐색

// N : 정수
// N이 입력되면 00시 00분 00초 부터 N시 59분 59초까지 3이 들어가는 횟수를 모두 구함
    // N까지 1씩 증가시키면서 3이 나오는 횟수를 카운트

    function countThreeInTime(h) {
        let count = 0;
      
        // i는 0부터 h까지 증가하며, j와 k는 각각 0부터 59까지 증가
        for (let i = 0; i <= h; i++) {
          for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
              // 매 시각 안에 '3'이 포함되어 있다면 카운트 증가
              if ((String(i) + String(j) + String(k)).includes('3')) {
                count++;
              }
            }
          }
        }
      
        return count;
      }
      
      // 예시 사용법
      let h = 5;
      console.log(countThreeInTime(h)); // 11475