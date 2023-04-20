function solution(number) {
  const arr = number.split("");

  const answer = arr.reduce((acc, cur) => {
    if (Number(acc) === 0 || Number(cur) === 0) return acc + Number(cur);
    else return acc * Number(cur);
  }, 0);
  return answer;
}

console.log(solution("567"));
console.log(solution("02984"));
