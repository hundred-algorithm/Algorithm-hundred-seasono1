// 0은 기둥, 1은 보
// 0은 삭제, 1은 설치
// frame [x,y,설치할 구조, 삭제 여부]
function solution(n, build_frame) {
  let answer = [];

  // 순회하기
  for (let i = 0; i < build_frame.length; i++) {
    const [x, y, a, b] = build_frame[i];
    // 설치일시
    if (b === 1) {
      answer.push([x, y, a]);
      if (!possible(answer)) answer.pop();
    }
    // 삭제일시
    else if (b === 0) {
      answer = answer.filter(
        ([xx, yy, aa]) => xx !== x || yy !== y || aa !== a
      );
      if (!possible(answer)) answer.push([x, y, a]);
    }
    console.log(answer);
  }
  answer.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
  console.log(answer);
  return answer;
}

function possible(answer) {
  // 기둥일 경우
  for (let i = 0; i < answer.length; i++) {
    const [x, y, a] = answer[i];
    if (a === 0) {
      if (y === 0) continue;
      else if (answer.find(([xx, yy, aa]) => x === xx && yy === y && aa === 1))
        continue;
      // 기둥 4번
      else if (
        answer.find(([xx, yy, aa]) => x - 1 === xx && yy === y && aa === 1)
      )
        continue;
      // 기둥 2번 규칙
      else if (
        answer.find(([xx, yy, aa]) => x === xx && yy === y - 1 && aa === 0)
      )
        continue;
      else return false;
    } else if (a === 1) {
      if (answer.find(([ax, ay, aa]) => ax === x && ay === y - 1 && aa === 0))
        continue;
      else if (
        answer.find(([ax, ay, aa]) => ax === x + 1 && ay === y - 1 && aa === 0)
      )
        continue;
      else if (
        answer.find(([ax, ay, aa]) => ax === x - 1 && ay === y && aa === 1) &&
        answer.find(([ax, ay, aa]) => ax === x + 1 && ay === y && aa === 1)
      )
        continue;
      else return false;
    }
  }
  return true;
}
solution(5, [
  [0, 0, 0, 1],
  [2, 0, 0, 1],
  [4, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 1],
  [3, 1, 1, 1],
  [2, 0, 0, 0],
  [1, 1, 1, 0],
  [2, 2, 0, 1],
]);
