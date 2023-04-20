function solution(N, K) {
  let num = N;
  let count = 0;
  while (num > 1) {
    if (num % K === 0) {
      num /= K;
    } else {
      num -= 1;
    }
    count++;
  }
  return count;
}
console.log(solution(25, 3));

//방법2
// 몫과 나머지를 구해서 1을 빼는 과정을 한 번에 처리한다
function solution2(N, K) {
  let num = N;
  let count = 0;
  while (num > 1) {
    let target = Math.floor(num / K) * K;
    count += num % K;
    num = target;
    if (num < K) {
      break;
    }
    num /= K;
    count++;
  }
  return count - 1;
}
console.log(solution2(25, 3));
