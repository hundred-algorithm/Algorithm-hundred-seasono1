function solution(name) {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let answer = 0;
  let min_move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    const idx = alpha.indexOf(name[i]);

    idx - 0 < 26 - idx ? (answer += idx) : (answer += 26 - idx);
    let startA = i + 1;
    while (startA < name.length && name[startA] === "A") {
      startA++;
    }
    console.log(
      min_move,
      i * 2 + name.length - startA,
      i + 2 * (name.length - startA)
    );
    min_move = Math.min(
      min_move,
      i * 2 + name.length - startA,
      i + 2 * (name.length - startA)
    );
  }

  return answer + min_move;
}
solution("AAABAAAAAAAZZ");
