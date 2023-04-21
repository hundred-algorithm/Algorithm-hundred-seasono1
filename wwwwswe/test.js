function countGroups(N, fears) {
    fears.sort(); // 오름차순으로 정렬
  
    let count = 0; // 총 그룹의 수
    let memberCount = 0; // 현재 그룹에 포함된 모험가의 수
  
    for (let i = 0; i < N; i++) {
      const fear = fears[i]; // 현재 모험가의 공포도
  
      memberCount++; // 현재 그룹에 현재 모험가를 포함시킴
  
      if (memberCount >= fear) { // 현재 그룹에 속한 모험가들의 최소 공포도를 만족하면
        count++; // 그룹의 수를 증가시키고
        memberCount = 0; // 현재 그룹에 포함된 모험가의 수를 초기화
      }
    }
  
    return count;
  }
  
  
  console.log(countGroups(5,[2, 3, 1, 2, 2]))