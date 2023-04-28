function solution(people, limit) {
  var answer = 0;
  const peopleSort = [...people].sort((a, b) => a - b);

  let start = 0;
  let end = peopleSort.length - 1;
  while (start < end) {
    const total = peopleSort[start] + peopleSort[end];
    if (total > limit) {
      end -= 1;
    } else {
      start += 1;
      end -= 1;
    }
    answer += 1;

    if (start === end) answer += 1; // 배열의 개수가 홀 수 일 경우
  }
  return answer;
}
