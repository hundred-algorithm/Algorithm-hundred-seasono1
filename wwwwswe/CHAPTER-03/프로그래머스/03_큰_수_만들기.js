// number : 숫자
// k : 제거할 수의 개수

// number에서 k만큼 수를 뺐을때 만들 수 있는 제일 큰수

// * 이렇게 할 경우 정렬이 되어 기대값이 다르게 나오므로 안됨
// 입력값을 배열로 만든 뒤에, 내림차순으로 정렬
// 그리고 k개의 수를 제거해주고, 제거한 숫자들을 제외하고 남은 숫자들을 합친다

function solution(number, k) {
    const stack = []; // 빈 배열
    for (let i = 0; i < number.length; i++) {
      const nowNum = number[i]; //현재 검사 중인 숫자를 nowNum 할당
      // 현재 숫자가 스택에 있는 마지막 숫자보다 크면 스택에서 마지막 숫자를 제거
      // k가 0보다 크고, stack의 길이가 0보다 크고, stack의 마지막 숫자가 nowNum보다 작을 경우, stack에서 마지막 숫자를 제거
      while (k > 0 && stack.length > 0 && stack[stack.length - 1] < nowNum) {
        stack.pop();
        k--;
      }
      stack.push(nowNum);
    }
    // k가 남아있다면 뒤에서부터 k개의 숫자를 제거
    while (k > 0) {
      stack.pop();
      k--;
    }
    // 제거 후 남은 숫자들을 이어붙여 리턴
    return stack.join("");
  }
  

/* 테스트 10번 시간초과
function solution(number, k) {
    const numbers = number.split(""); // 문자열 number를 배열로 변환
    const len = numbers.length; // 배열 numbers의 길이를 구하여 len에 저장

    let i = 0; // 반복문에서 사용할 변수 i를 0으로 초기화
    while (i < numbers.length - 1 && k > 0) { // numbers 배열의 인덱스 범위 내에서 반복문을 실행하며, k가 0보다 큰 동안 반복
      if (numbers[i] < numbers[i + 1]) { // 현재 인덱스의 값이 다음 인덱스의 값보다 작으면
        numbers.splice(i, 1); // 현재 인덱스의 값을 배열에서 제거
        k--; // 제거한 수의 개수를 하나 감소시킴
        i = i === 0 ? 0 : i - 1; // 현재 인덱스를 조정. i가 0이면 그대로, 0이 아니면 1만큼 감소
      } else {
        i++; // 현재 인덱스가 다음 인덱스보다 크거나 같으면 다음 인덱스로 이동
      }
    }

    // k개의 수를 다 제거하지 못했다면 뒤에서부터 남은 k개의 수를 제거
  if (k > 0) {
    numbers.splice(numbers.length - k, k); // 배열의 끝에서부터 k개의 값을 제거
  }

  return numbers.join(""); // 배열 numbers를 문자열로 변환하여 반환
}

console.log(solution('1942', 2)); // 94
*/
