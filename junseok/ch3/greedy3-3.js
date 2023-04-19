// 숫자 카드 게임

function solution(arr) {
  const min = arr.map((item) => Math.min(...item));
  return Math.max(...min);
}
