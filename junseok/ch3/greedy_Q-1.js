function solution(array) {
  const sortArr = [...array].sort((a, b) => a - b);
  const { length } = sortArr;
  let count = 0;
  let answer = 0;
  // count가 해당 배열의 index의 값과 같거나 크면 하나의 팀이 결성
  for (let i = 0; i < length; i++) {
    count += 1;
    if (count >= sortArr[i]) {
      answer += 1;
      count = 0;
    }
  }
  return answer;
}

console.log(solution([2, 3, 1, 2, 2]));
