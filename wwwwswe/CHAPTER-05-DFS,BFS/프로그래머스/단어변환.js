// https://school.programmers.co.kr/learn/courses/30/lessons/43163

// 하나씩 검사해야함으로 큐 사용 -> BFS

function ladderLength(begin, target, words) {
  if (begin === target || !words.includes(target)) {
    return 0; // 변환이 불가능한 경우 0 반환
  }

  const queue = [];
  queue.push([begin, 0]); // 시작 단어와 단계 수를 큐에 추가 (단계 수 초기값: 0)
  const visited = new Set(); // 방문한 단어를 기록하기 위한 Set
  visited.add(begin);

  while (queue.length > 0) {
    const [currentWord, steps] = queue.shift();

    for (let i = 0; i < currentWord.length; i++) {
      // 단어의 각 문자를 하나씩 바꿔가며 새로운 단어 생성
      // 알파벳 수는 26개니까 26개까지
      for (let j = 0; j < 26; j++) {
        const newWord =
          currentWord.slice(0, i) +
          // 현재 문자의 인덱스 j에 97을 더하여, a부터 z까지의 소문자 알파벳을 순서대로 생성
          // j가 0이면 97 + 0 = 97이 되어 a, j가 1이면 97 + 1 = 98이 되어 b
          String.fromCharCode(97 + j) +
          currentWord.slice(i + 1);

        if (words.includes(newWord) && !visited.has(newWord)) {
          // words에 포함되고 방문하지 않은 단어인 경우 큐에 추가
          if (newWord === target) {
            return steps + 1; // 변환 완료되었을 때 단계 수 반환
          }
          queue.push([newWord, steps + 1]); // 단계 수를 1 증가시켜 큐에 추가
          visited.add(newWord);
        }
      }
    }
  }

  return 0; // 변환 과정이 불가능한 경우 0 반환
}

const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

const result = ladderLength(begin, target, words);
console.log(result); // 4
