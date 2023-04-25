function solution(n, lost, reserve) {
  let uniform = n - lost.length; // 유니폼을 가지고 온 인원
  const lostSort = [...lost].sort((a, b) => a - b);
  const reverseSort = [...reserve].sort((a, b) => a - b);

  const lostArr = [];

  // 중복 되는 숫자가 있다면 거르기
  lostSort.forEach((item) => {
    const correct = reverseSort.find((el) => el === item);
    if (correct === undefined) {
      lostArr.push(item);
    } else {
      const idx = reverseSort.indexOf(correct);
      reverseSort.splice(idx, 1);
      uniform += 1;
    }
  });

  for (let i = 0; i < reverseSort.length; i++) {
    const num = reverseSort[i];
    for (let j = 0; j < lostArr.length; j++) {
      // [3] [4]
      if (num - 1 === lostArr[j] || num + 1 === lostArr[j]) {
        uniform += 1;
        lostArr.splice(j, 1);
        break;
      }
    }
  }
  return uniform;
}
