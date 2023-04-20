// 숫자 카드 게임

function solution(arr) {
  const min = arr.map((item) => Math.min(...item));
  return Math.max(...min);
}
console.log(
  solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
);
console.log(
  solution([
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ])
);
