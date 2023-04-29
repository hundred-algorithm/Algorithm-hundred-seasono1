// 문자열 재정렬
function solution(string) {
  //문자정렬
  const strArr = string.split("").filter((item) => {
    return !Number.isInteger(Number(item));
  });
  strArr.sort();
  const str = strArr.join("");

  // 숫자
  const numArr = string.split("").filter((item) => {
    return Number.isInteger(Number(item));
  });
  const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0);
  return str + sum;
}
console.log(solution("K1KA5CB7"));
console.log(solution("AJKDLSI412K4JSJ9D"));
