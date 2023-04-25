// 문자열 뒤짚기
function solution(num) {
  //2N
  const replace0 = num.split("1");

  const replace1 = num.split("0");

  const len0 = replace0.filter((item) => item !== "").length;
  const len1 = replace1.filter((item) => item !== "").length;

  return len1 < len0 ? len1 : len0;
}

console.log(solution("11111")); //0
console.log(solution("0001100")); //1
console.log(solution("00000001")); //1
console.log(solution("11001100110011000001")); //4
console.log(solution("11101101")); //2

//답지 풀이
function solution2(num) {
  //N
  let count0 = 0; //0으로 바꾸는 횟수
  let count1 = 0; // 1로 바꾸는 횟수

  num[0] === "0" ? (count1 += 1) : (count0 += 1);

  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] !== num[i + 1]) {
      num[i + 1] === "0" ? (count1 += 1) : (count0 += 1);
    }
  }
  return Math.min(count0, count1);
}

console.log(solution2("11111")); //0
console.log(solution2("0001100")); //1
console.log(solution2("00000001")); //1
console.log(solution2("11001100110011000001")); //4
console.log(solution2("11101101")); //2
