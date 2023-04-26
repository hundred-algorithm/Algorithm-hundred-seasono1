// n : 전체 학생의 수, 2~30
// lost : 도난당한 학생들의 번호
// reserve : 체육복을 가져온 학생들의 번호

// reserve의 앞 뒤 번호만 체육복을 빌려줄 수 있음
// reserve === lost일 경우 reserve는 체육복을 빌려줄 수 없음

// ex. n: 5, lost: [2, 4], reserve: [1, 3, 5]
    // 12345 -> 5
// n: 5, lost: [2, 4], reserve: [3]
    // 1235 -> 4
// n: 3, lost: [3], reserve: 2

 


function solution(n, lost, reserve) {
    // 초기값으로 모든 학생들이 체육복을 가지고 있다고 설정
    // .fill() 메서드는 배열 내 모든 요소를 지정된 값으로 초기화
    const students = new Array(n).fill(1);
    
    // 체육복을 도난당한 학생들은 체육복을 가지지 않은 상태로 0으로 설정
    lost.forEach(student => students[student - 1]--);
    
    // 체육복을 가지고 있는 학생들은 1, 도난당한 학생들은 0, 체육복 여분이 있는 학생들은 2로 설정
    reserve.forEach(student => students[student - 1]++);
    
    // 체육복을 빌려줄 수 있는 경우에만 빌려줄 수 있음
    for (let i = 0; i < students.length; i++) {
      if (students[i] === 0) {
        if (i > 0 && students[i-1] === 2) { // 왼쪽 학생이 체육복 여분이 있는 경우
          students[i]++;
          students[i-1]--;
        } else if (i < students.length - 1 && students[i+1] === 2) { // 오른쪽 학생이 체육복 여분이 있는 경우
          students[i]++;
          students[i+1]--;
        }
      }
    }
    
    // 체육복을 가진 학생들의 수를 반환
    return students.filter(student => student > 0).length;
  }
  
  console.log(solution(5, [2, 4], [2, 3])); 
