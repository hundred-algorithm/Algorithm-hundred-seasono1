// 무지의 먹방
function solution(food_times, k) {
  let answer = 0;
  let food_leng = food_times.length;
  let foods = [];
  let total = 0; // 모든 음식을 먹을때 걸리는 시간.
  let sum_val = 0; // 음식을 먹을때 걸린 시간 누적값.
  let previous_val = 0; // 이전 음식을 먹을때 걸린 시간.

  for (let i = 0; i < food_times.length; i++) {
    foods[i] = { time: food_times[i], number: i + 1 };
    total += food_times[i];
  }

  // 먹을 음식이 없으면 -1 리턴 -> 즉, 네트워크 장애가 걸리는 k초 이전에 다 먹을 수 있으면.
  if (total <= k) {
    return -1;
  }

  // 걸리는 시간 기준으로 내림차순으로 정렬하여 끝에서부터 pop 한다.
  foods.sort((a, b) => b.time - a.time);

  // 0+ (최소시간 - 0) * length <= k
  while (
    sum_val + (foods[foods.length - 1].time - previous_val) * food_leng <=
    k
  ) {
    let now = foods.pop();
    sum_val += (now.time - previous_val) * food_leng;
    food_leng -= 1; // 1바퀴 순회 하였으니 1 감소시킨다.
    previous_val = now.time;
  }

  // 결과를 구하기 위하여 number 를 기준으로 다시 정렬 한다.
  foods.sort((a, b) => a.number - b.number);

  answer = foods[(k - sum_val) % food_leng].number;

  return answer;
}
