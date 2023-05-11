// https://school.programmers.co.kr/learn/courses/30/lessons/60057

// s : 압축할 문자열
// 하나씩 잘랐을때 aabbaccc -> 2a2ba3c
// 세개씩 잘랐을때 abcabcdede ->  2abcdede
// 문자열이 들어왔을때 반복되는 문자를 가장 짧게 압축 할 수 있도록 구현
// 문자열이 들어오면 문자열을 검사하고 가장 짧은 방법으로 구현되었을때 문자열의 길이를 리턴

function solution(s) {
    let answer = s.length;
  
    // i개씩 잘랐을 때 압축한 결과의 길이
    // i가 문자열의 절반을 넘어가면 어차피 반복되는 문자열을 찾을 수 없으므로 /2까지
    for (let i = 1; i <= s.length / 2; i++) {
        // s 문자열을 압축한 결과를 저장
      let compressed = '';
      let count = 1;
      // 첫 번째 문자열부터 시작해서 i개씩 자른 문자열들을 검사
      let prev = s.slice(0, i);
  
      // i개씩 잘랐을 때의 결과를 순회하면서 압축
      for (let j = i; j < s.length; j += i) {
        const current = s.slice(j, j + i);
  
        if (prev === current) {
          count++;
        } else {
          compressed += (count > 1) ? count + prev : prev;
          count = 1;
          prev = current;
        }
      }
  
      // 마지막으로 남은 문자열 처리
      compressed += (count > 1) ? count + prev : prev;
      // 압축한 결과의 길이를 최소값으로 업데이트/ 압축한 결과의 길이를 최소값으로 업데이트
      answer = Math.min(answer, compressed.length);
    }
  
    return answer;
  }
  
  console.log(solution('aabbacc')) // 7