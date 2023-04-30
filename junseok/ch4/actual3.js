function solution(s) {
  let answer = 1000;
  const { length } = s;
  for (let i = 1; i <= length / 2; i++) {
    let makeShort = "";
    let count = 1;
    let base = s.slice(0, i);
    for (let j = i; j < length; j += i) {
      if (base === s.slice(j, j + i)) count += 1;
      else {
        if (count === 1) makeShort += base;
        else makeShort += count + base;
        count = 1;
        base = s.slice(j, j + i);
      }
    }
    if (count === 1) makeShort += base;
    else makeShort += count + base;
    console.log(makeShort);
    answer = Math.min(answer, makeShort.length);
    makeShort = "";
  }
  return answer;
}
console.log(solution("aabbaccc"));
console.log("aabbaccc".slice(5, 10));
