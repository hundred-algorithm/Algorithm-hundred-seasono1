// 테케 : https://school.programmers.co.kr/learn/courses/30/lessons/42891

// N : 먹어야할 음식의 갯수
    // 각 음식은 1~N까지의 번호가 붙음
    // N : 5, 각음식 : 1, 2, 3, 4, 5  --> 굳이 보지 않아도 됨


// food_times : 음식을 먹는데 필요한 시간
// k : 네트워크 장애시간 

// 음식을 먹을 수 있는 일정 시간은 1초로 제한되어있다고 가정한다
// food_times 배열에서 순서대로 1씩 차감하면서 돌아간다
    // 단 0이 되었을 경우에는 해당 순서를 건너뛴다
    // 남은 음식이 없다면 -1을 반환한다.
// k만큼 차감되었을때 food_times 다음에 올 음식 순서를 리턴한다
    // 즉 인덱스 +1의 값을 반환
// k번 실행 된 후 다음에 올 인덱스+1의 값을 찾아야함

function solution(food_times, k) {
    const length = food_times.length;
    let sum = 0;
  
    // 음식 시간의 총합이 k보다 작거나 같은 경우 -1을 반환한다.
    if (food_times.reduce((acc, cur) => acc + cur, 0) <= k) {
      return -1;
    }
  
    // 우선순위 큐에 음식 시간과 해당 음식 번호를 삽입한다.
    const pq = [];
    for (let i = 0; i < length; i++) {
      pq.push({ time: food_times[i], idx: i + 1 });
    }
  
    // 음식 시간을 기준으로 오름차순 정렬한다.
    pq.sort((a, b) => a.time - b.time);
  
    // 이전 음식 시간을 저장하는 변수를 선언한다.
    let prevTime = 0;
  
    // 우선순위 큐를 돌면서 음식 시간을 감소시킨다.
    for (let i = 0; i < length; i++) {
      const time = pq[i].time;
      const diff = time - prevTime;
  
      // 현재 음식 시간이 이전 음식 시간보다 큰 경우
      if (diff !== 0) {
        const timeSum = diff * (length - i);
  
        // 남은 시간보다 현재 음식 시간의 총합이 큰 경우
        if (sum + timeSum > k) {
          const remaining = k - sum;
          const arr = pq.slice(i).sort((a, b) => a.idx - b.idx);
          return arr[remaining % (length - i)].idx;
        }
  
        sum += timeSum;
      }
  
      prevTime = time;
    }
  
    return -1;
  }

  
  console.log(solution([3, 1, 2], 5)); // 1


 
  /* 도전하려다 실패한 코드
  function solution(food_times, k) {
    let sum = food_times.reduce((acc, cur) => acc + cur, 0);
    if (sum <= k) {
      return -1;
    }
    let sortedCake = food_times.map((val, idx) => [val, idx]).sort((a, b) => b[0] - a[0]); // 배열의 값과 인덱스를 함께 저장한 2차원 배열을 생성하고 내림차순으로 정렬
    let i = 0;
    while (k >= sortedCake[i][0]) {
      k -= sortedCake[i][0];
      i++;
      if (i === sortedCake.length) {
        i = 0;
      }
    }
    return sortedCake[i][1]; // 인덱스를 반환
  }

  console.log(solution([3, 1, 2], 5)); // 1이 나오긴 하지만 테케 통과를 못함
  */
