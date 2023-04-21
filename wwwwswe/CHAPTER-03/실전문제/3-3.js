// 각 행마다 가장 작은 수를 찾아 그 중 가장 큰 수를 찾음

// N: 행, M:은 열
function card(n, m, cards) {
    let maxOfMins = 0; // 행의 최소값 중 가장 큰 값
  
    for (let i = 0; i < n; i++) { // 각 행에 대해
      let min = Math.min(...cards[i]); // 최소값 찾기
      maxOfMins = Math.max(maxOfMins, min); // 이전까지의 최소값들과 비교하여 가장 큰 값 찾기
    }
  
    return maxOfMins;
  }

  
  const cards = [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2]
  ];
  console.log(card(3, 3, cards)); // 2
  