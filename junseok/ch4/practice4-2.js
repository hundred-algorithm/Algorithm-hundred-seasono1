// 왕실의 나이트
function solution(place) {
  const size = 8;
  const changeNum = [0, "a", "b", "c", "d", "e", "f", "g", "h"];
  const idx = changeNum.indexOf(place[0]);
  const startPosition = [idx, +place[1]];

  let count = 0;
  for (let i = 0; i < 4; i++) {
    if (i === 0) count += check("UP", startPosition, size);
    if (i === 1) count += check("DOWN", startPosition, size);
    if (i === 2) count += check("LEFT", startPosition, size);
    if (i === 3) count += check("RIGHT", startPosition, size);
  }
  return count;
}

function check(position, start, size) {
  if (position === "UP") {
    const check = start[1] - 2;
    if (check < 0) return 0;
    else {
      let count = 0;
      start[0] - 1 > 0 ? (count += 1) : (count += 0);
      start[0] + 1 < 9 ? (count += 1) : (count += 0);
      return count;
    }
  }
  if (position === "DOWN") {
    const check = start[1] + 2;
    if (check > size) return 0;
    else {
      let count = 0;
      start[0] - 1 > 0 ? (count += 1) : (count += 0);
      start[0] + 1 < 9 ? (count += 1) : (count += 0);
      return count;
    }
  }
  if (position === "RIGHT") {
    const check = start[0] + 2;
    if (check > size) return 0;
    else {
      let count = 0;
      start[1] - 1 > 0 ? (count += 1) : (count += 0);
      start[1] + 1 < 9 ? (count += 1) : (count += 0);
      return count;
    }
  }
  if (position === "LEFT") {
    const check = start[0] - 2;
    if (check < 1) return 0;
    else {
      let count = 0;
      start[1] - 1 > 0 ? (count += 1) : (count += 0);
      start[1] + 1 < 9 ? (count += 1) : (count += 0);
      return count;
    }
  }
}

console.log(solution("f7"));
// 단순 노가다/

// 다른 풀이법
function solution2(place) {
  const size = 8;
  const changeNum = [0, "a", "b", "c", "d", "e", "f", "g", "h"];
  const idx = changeNum.indexOf(place[0]);
  const startPosition = [idx, +place[1]];
  const state = [
    [-2, -1],
    [-2, 1],
    [2, 1],
    [2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];
  let count = 0;
  for (let i = 0; i < state.length; i++) {
    let dx = startPosition[0] + state[i][0];
    let dy = startPosition[1] + state[i][1];

    if (dx > 0 && dx < 9 && dy > 0 && dy < 9) count += 1;
  }
  return count;
}
console.log(solution2("a1"));
