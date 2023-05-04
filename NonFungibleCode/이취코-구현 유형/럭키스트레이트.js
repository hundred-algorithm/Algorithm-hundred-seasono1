// 캐릭터의 점수 N이 자릿수를 기준으로 반으로 나누어 왼쪽과 오른쪽 자릿수의 합이 같으면 럭키 스트레이트 사용 가능
// 길이를 기준으로 절반 나누고 값을 각각 더해서 비교하기

function solution(N) {
    const number = String(N);
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < number.length / 2; i++) {
      sum1 += Number(number[i]);
    }
    for (let i = number.length / 2; i < number.length; i++) {
      sum2 += Number(number[i]);
    }
    if (sum1 === sum2) {
      console.log('LUCKY');
    } else {
      console.log('READY');
    }
  }