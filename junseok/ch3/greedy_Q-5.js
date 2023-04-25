// 볼링공 고르기
function solution(arr, M) {
  // arr은 배열, M은 최대 무게
  const { length } = arr;
  const sum = ((length - 1) * length) / 2;
  const duplicate = arr.filter((item, index) => index !== arr.indexOf(item));

  return sum - duplicate.length;
}
console.log(solution([1, 5, 4, 3, 2, 4, 5, 2]));
console.log(solution([1, 3, 2, 3, 2]));
console.log(solution([1, 3, 3, 3, 4]));

// 볼링공 고르기 정답 코드

function solution2(arr, M) {
  const { length } = arr;
  const blank = new Array(11).fill(0); // 0~ 10번
  for (let el of arr) {
    blank[el] += 1;
  }
  let result = 0;
  let count = length;
  for (let i = 1; i <= M; i++) {
    count -= blank[i]; // 배열의 총 길이에서 해당 무게의 공 갯수 만큼 뺸다.
    result += blank[i] * count;
  }
  return result;
}
console.log(solution2([1, 5, 4, 3, 2, 4, 5, 2], 5));
console.log(solution2([1, 3, 2, 3, 2], 5));
console.log(solution2([1, 3, 3, 3, 4], 5));
/*
const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(N, M);
*/
