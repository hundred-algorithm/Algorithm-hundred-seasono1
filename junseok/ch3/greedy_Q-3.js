// 문자열 뒤짚기
function solution(num) {
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
