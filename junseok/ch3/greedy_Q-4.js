function solution(coins) {
  const sortCoins = [...coins].sort((a, b) => a - b);
  let answer = 1;
  for (let el of sortCoins) {
    if (answer < el) {
      break;
    } else {
      answer += el;
    }
  }
  return answer;
}
console.log(solution([3, 2, 1, 1, 9]));
/*
[1,1,2,3,9]
1<1
answer = 2

2<1
answer=3

3<2
answer=5

5<3
answer=8

8<9
true answer =8 break
*/
