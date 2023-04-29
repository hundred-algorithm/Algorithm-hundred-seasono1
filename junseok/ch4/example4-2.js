// 시각
function solution(N) {
  let count = 0;
  for (let i = 0; i <= N; i++) {
    //시간
    const hour = `${i}`;
    if (hour.includes("3")) {
      count += 3600;
      continue;
    }
    for (let j = 0; j <= 59; j++) {
      //분
      const minute = `${j}`;
      if (minute.includes("3")) {
        count += 60;
        continue;
      }
      for (let z = 0; z <= 59; z++) {
        const second = `${z}`;
        if (second.includes("3")) count++;
      }
    }
  }
  return count;
}
console.log(solution(5));
