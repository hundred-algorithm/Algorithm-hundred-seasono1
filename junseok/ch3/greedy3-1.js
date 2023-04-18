// 거스름돈
// 가장 큰 단위가 다른 작은 단위의 배수 이기 때문에 가능한 접근 방법이다.
function solution(money) {
  const coin = [500, 100, 50, 10];
  let answer = 0;
  let total = money;
  for (let i = 0; i < coin.length; i++) {
    answer += Math.floor(total / coin[i]);
    total %= coin[i];
  }
  return answer;
}
console.log(solution(1260));
