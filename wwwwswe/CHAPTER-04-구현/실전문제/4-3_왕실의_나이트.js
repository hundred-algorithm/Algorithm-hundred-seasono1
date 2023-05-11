// 체스판 8 * 8 좌표 평면, 가로 a, b, c, d, e , f, g, h, 세로 1, 2, 3, 4, 5, 6, 7, 8
// 나이트가 이동할때는 L자 형태로만 이동 가능하며 체스판을 벗어날 수 없음
    // 수평으로 두칸 이동 후 수직으로 한 칸 이동
    // 수직으로 두 칸 이동 후 수평으로 한 칸 이동
        // 2칸 이동 후 다른 방향으로 1칸 이동

// 나이트가 이동할 수 있는 경우의 수를 구함
    // 한 번 이동 후 연속적으로 움직일 수 있는 횟수는 제외하고 현재 자리에서 이동할 수 있는 모든 경우의 수를 구함

    function countKnightMoves(inputData) {
        // inputData로부터 주어진 나이트의 위치 row와 column을 구함
        // row는 inputData의 2번째 문자를 정수로 변환한 값
        const row = parseInt(inputData[1]);
        // column은 inputData의 첫 번째 문자에서 'a'를 뺀 값을 1을 더한 값
        const column = inputData.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      
        // 나이트가 이동할 수 있는 8가지 방향을 steps 배열에 정의
        const steps = [    [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]
        ];
      
        let result = 0;
      
        for (const step of steps) {
            // 현재 위치에서 해당 방향으로 이동한 위치 nextRow, nextColumn을 계산
          const nextRow = row + step[0];
          const nextColumn = column + step[1];
      
          // nextRow와 nextColumn이 체스판 내에 있는지 확인
          // 체스판은 8x8 크기이므로, nextRow와 nextColumn이 각각 1 이상 8 이하인지 확인
          if (
            nextRow >= 1 && nextRow <= 8 &&
            nextColumn >= 1 && nextColumn <= 8
          ) {
            //  nextRow와 nextColumn이 체스판 내에 있다면, result를 1 증가
            result++;
          }
        }
      
        return result;
      }
      
      // 예시 사용법
      const inputData = 'c2';
      console.log(countKnightMoves(inputData)); // 2
      