// https://www.acmicpc.net/problem/14888

// n개로 이루어진 수열 1 ~ n
// 연산자는 n - 1개가 주어짐 -> n이 3일 경우 연산자는 2개가 주어짐
// 수와 수 사이에 끼어넣을 수 있는 연산자가 있고 연산자는 +, -, *, /로만 이루어져 있음
// 수와 수 사이에 연산자를 넣어 수식을 만들때 만들 수 있는 최대값과 최소값을 구해야함

// 한개씩 모두 탐색해야 함으로 DFS사용

function calculateMinMax(n, numbers, operators) {
  let max = -Infinity;
  let min = Infinity;

  // DFS 함수 정의
  function dfs(idx, result) {
    if (idx === n) {
      // 모든 수열을 다 계산한 경우 최대값과 최소값 업데이트
      max = Math.max(max, result);
      min = Math.min(min, result);
      return;
    }

    // 각 연산자에 대해 계산 수행
    for (let i = 0; i < 4; i++) {
      if (operators[i] > 0) {
        operators[i]--; // 연산자 사용 처리

        // 연산자에 따라 계산 수행
        let nextResult = result;
        if (i === 0) nextResult += numbers[idx]; // 덧셈
        else if (i === 1) nextResult -= numbers[idx]; // 뺄셈
        else if (i === 2) nextResult *= numbers[idx]; // 곱셈
        else if (i === 3) nextResult = Math.floor(nextResult / numbers[idx]); // 나눗셈

        dfs(idx + 1, nextResult); // 다음 인덱스로 재귀 호출

        operators[i]++; // 연산자 사용 처리 취소
      }
    }
  }

  dfs(1, numbers[0]); // 첫 번째 수부터 시작

  return [max, min];
}

// 입력 예시
const n = 6;
const numbers = [1, 2, 3, 4, 5, 6];
const operators = [2, 1, 1, 1];

// 최대값과 최소값 계산
const [maxValue, minValue] = calculateMinMax(n, numbers, operators);

// 출력
console.log(maxValue); // 54가 나와야 하는데 48이 나옴
console.log(minValue); // -24
