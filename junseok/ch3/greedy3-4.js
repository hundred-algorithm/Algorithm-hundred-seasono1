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
