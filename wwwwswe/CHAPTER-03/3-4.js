// 최대한 많이 나눠서 먼저 나눌 수 있는 수를 구한다

function reduceToOne(n, k) {
    let count = 0;
    while (n > 1) { // n이 1이 될때까지 반복문 실행
      if (n % k === 0) { // n이 k로 나누어 떨어지는지 확인
        n /= k; // 나누어 떨어지면 k로 나눔
      } else {
        n--; // 나누어 떨어지지 않을 경우 -1
      }
      count++; // 총 연산 횟수 증감
    }
    return count;
  }
  
  
  console.log(reduceToOne(25, 3))

