// 큰수의 법칙
// 방법 1.

function solution(N, M, K) {
  const max = Math.max(...N);
  const maxLength = N.filter((item) => item === max).length;
  const filter = N.filter((item) => item !== max);
  const max2 = Math.max(...filter);
  let answer = 0;
  let count = 0;
  if (maxLength === 1) {
    for (let i = 1; i <= M; i++) {
      if (count < K) {
        answer += max;
        count++;
      } else {
        answer += max2;
        count = 0;
      }
    }
  } else {
    for (let i = 1; i <= M; i++) {
      answer += max;
    }
  }
  return answer;
}
console.log(solution([2, 4, 5, 4, 6], 8, 3));

// 방법 2.
function solution2(N, M, K) {
  const sortArr = [...N].sort((a, b) => b - a);
  const max1 = sortArr[0];
  const max2 = sortArr[1];

  // 가장 큰수가 더해지는 횟수 계산
  let count = Math.floor(M / (K + 1)) * K;
  count += M % (K + 1);

  //정답구하기
  let answer = 0;
  answer += count * max1;
  answer += (M - count) * max2;
  return answer;
}
console.log(solution2([2, 4, 5, 4, 6], 8, 3));
