// 유클리드 호제법
// 두개의 자연수에 대해 최대 공약수를 구하는 대표적인 알고리즘.
// 재귀 함수의 작동 방식이 stack과 같다

function GCD(N, M) {
  if (N % M === 0) return M;
  else GCD(M, N % M);
}
console.log(GCD(192, 162)); // 192와 162의 최대 공약수는 6

/*
`192 162
 162 30
 30  12
 12  6
*/
