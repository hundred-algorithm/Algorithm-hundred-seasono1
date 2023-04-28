function solutin(size, move) {
  const answer = [1, 1];
  for (let i = 0; i < move.length; i++) {
    const moving = move[i];
    if (moving === "L") {
      if (answer[1] > 1) answer[1] -= 1;
    }
    if (moving === "R") {
      if (answer[1] < size) answer[1] += 1;
    }
    if (moving === "U") {
      if (answer[0] > 1) answer[0] -= 1;
    }
    if (moving === "D") {
      if (answer[0] < size) answer[0] += 1;
    }
  }
  return answer;
}
console.log(solutin(5, "RRRUDD"));
