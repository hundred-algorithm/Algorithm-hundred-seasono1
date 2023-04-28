function solution(number, k) {
  const answer = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    const item = number[i];
    if (answer.length === 0) {
      answer.push(item);
      continue;
    }

    while (+answer[answer.length - 1] < +item) {
      answer.pop();
      count++;
      if (count === k) {
        answer.push(item);
        return answer.join("") + number.slice(i + 1);
      }
    }
    answer.push(item);
  }
  return answer.join("").slice(0, number.length - k + count); //"4321" , '1'
}
