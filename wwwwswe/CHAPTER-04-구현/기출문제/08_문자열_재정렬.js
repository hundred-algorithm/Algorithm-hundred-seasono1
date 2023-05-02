// mixStrNum : 알파벳 대문자와 0~9까지의 순서의 상관없이 문자열로 주어짐
// 알파벳은 오름차순으로 정렬하고 그 뒤에 숫자를 합한 값을 더해서 리턴

// 알파벳을 분리하여 오름차순으로 담음
// 숫자를 분리하여 모두 더해서 담음
// 두개의 값을 다시 합쳐서 리턴

function rearrange(mixStrNum) {
    // 알파벳을 담을 배열과 숫자를 더해서 담을 변수를 초기화
    let alphabetArr = [];
    let numberSum = 0;
  
    // 입력 문자열을 한 글자씩 검사
    for (let i = 0; i < mixStrNum.length; i++) {
      const char = mixStrNum.charAt(i);
      const code = mixStrNum.charCodeAt(i);
  
      // 만약 알파벳이면 배열에 추가
      if (code >= 65 && code <= 90) {
        alphabetArr.push(char);
      }
      // 만약 숫자이면 더해서 numberSum에 저장
      else if (code >= 48 && code <= 57) {
        numberSum += Number(char);
      }
    }
  
    // 알파벳 배열을 오름차순으로 정렬
    alphabetArr.sort();
  
    // 알파벳 배열과 숫자 합을 이용해 새로운 문자열을 만들어 리턴
    return alphabetArr.join('') + numberSum;
  }
  
  console.log(rearrange('K1KA5CB7')); // ABCKK13
  