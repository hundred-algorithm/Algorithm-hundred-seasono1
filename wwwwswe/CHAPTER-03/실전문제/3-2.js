// 배열 = arr
// 더할 수 있는 횟수 = m
// 같은 인덱스를 연속해서 사용할 수 있는 횟수 = k

// 반복되는 수열에 대해 파악 -> 가장 큰 수와 두번째로 큰 수가 더해질 때는 특정한 수열 형태로 일정하게 반복해서 더해짐

function getMaxSum(arr, m, k) {
    arr.sort((a, b) => b - a); // 큰 수부터 처음으로 오게 내림차순 정렬
  
    const first = arr[0]; // 가장 큰 수
    const second = arr[1]; // 두 번째로 큰 수
  
    let count = parseInt(m / (k + 1)) * k; // 가장 큰 수가 더해지는 횟수
    count += m % (k + 1); // 나머지 처리
  
    let result = 0;
    result += count * first; // 가장 큰 수 더하기
    result += (m - count) * second; // 두 번째로 큰 수 더하기
  
    return result;
  }
  
  console.log(getMaxSum([2, 4, 5, 4, 6], 8, 3)); // 46
  