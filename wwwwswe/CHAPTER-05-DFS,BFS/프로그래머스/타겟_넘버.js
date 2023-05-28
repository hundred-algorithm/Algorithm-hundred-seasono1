// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// n개의 음이 아닌 정수들이 주어졌을때 순서를 바꾸지 않고 더하거나 빼서 타겟 넘버를 만들 수 있는 방법의 수를 리턴해야함

// DFS사용

function solution(numbers, target) {
  let count = 0;

  // 재귀 함수를 호출할 때 마다 현재 인덱스의 숫자를 더하거나 뺀 결과를 계산하고, 재귀적으로 다음 인덱스로 넘어가며 가능한 모든 경우의 수를 탐색
  function calculate(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    // 현재 인덱스의 숫자를 더하거나 뺀 결과를 계산
    // 다음 인덱스로 넘어가기 위해 + 1
    calculate(index + 1, sum + numbers[index]);
    calculate(index + 1, sum - numbers[index]);
  }

  // 재귀 함수 호출
  calculate(0, 0);

  return count;
}

const numbers1 = [1, 1, 1, 1, 1];
const target1 = 3;
console.log(solution(numbers1, target1)); // 5

const numbers2 = [4, 1, 2, 1];
const target2 = 4;
console.log(solution(numbers2, target2)); // 2
