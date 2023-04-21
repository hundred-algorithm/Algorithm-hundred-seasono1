// S : 숫자 0~9까지만 이루어진 문자열
// S에서 *와 +를 이용해 만들어질 수 있는 가장 큰 수 구하기
// 왼쪽부터 오른쪽으로 숫자를 하나씩 확인

// +보다 *를 했을때 수가 더 커진다. 단 0과 1은 곱하면 수가 작아지니 0과 1 다음으로 오는 큰 수는 더해준다.
// 0이 있을 경우 0과 0다음에 오는 수를 더해준 후 나머지 큰수부터 곱해준다.
// ex. S : 02984, (0+2) * 9 * 8  * 4, 리턴 : 576

function largestNumber(S) {
    let result = parseInt(S[0]); // 왼쪽부터 계산해야 해서 S 문자열의 첫번째 숫자를 넣어 초기값으로 설정
  
    for (let i = 1; i < S.length; i++) {
      const num = parseInt(S[i]);
      if (num === 0 || num === 1 || result === 0 || result === 1) { // num과 result의 숫자가 0또는 1과 같은지
        result += num; //num이 0 혹은 1이라면 result에 더하기
      } else { 
        result *= num;  // 모두 2 이상의 숫자라면 곱하기
      }
    }
    return result;
  }
  
  console.log(largestNumber('06527')) // 420