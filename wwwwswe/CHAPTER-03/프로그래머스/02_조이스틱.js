// ↑↓←→ 로 알파벳 이름 완성하기
// 맨 처음 글자는 A로만 이루어져 있음

// ↑ : 다음 알파벳
// ↓ : 이전 알파벳 (A에서 이동하면 Z, 뒤로 왼쪽으로 돌아감) 
// ← : 커서를 왼쪽으로 이동 (ABCD| 였으면 ABC|D 로 이동)
// → : 커서를 오른쪽으로 이동 (A|BCD 였으면 AB|CD 로 이동)

// name 변수에 만들고자 하는 이름이 들어올때 최소로 움직여서 만들수 있는 횟수를 리턴
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// name으로 JAZ가 들어오면 AAA 상태에서 이름을 만들어야함 
// 첫번쨰 A를 ↑로 9번 움직여서 로 만듦
// 현재 커서 |J A A
// ←를 한칸 움직여 마지막으로 이동 
// 현재 커서 J A |A
// 마지막 A를 ↓로 한칸 움직여서 Z로 변경
// 현재 커서 J A Z

// 즉 name이 들어오면 name은 글자수 만큼 A가 들어오게 됨

function joystick(name) {
    // .charCodeAt() 메서드는 문자열에서 특정 인덱스에 해당하는 문자의 Unicode 값을 반환
    // 'abc'.charCodeAt(0)은 문자열 'abc'의 첫 번째 문자 'a'의 Unicode 값인 97을 반환
    // A, Z 이 값들은 이후에 알파벳을 비교하여 문자 조작 횟수를 계산할 때 사용
    const A = "A".charCodeAt(0);
    const Z = "Z".charCodeAt(0);
    let count = 0; // 조이스틱을 조작하는데 필요한 최소한의 조작 횟수를 저장
  
    // 1. 좌우로 움직여 최대한 한 쪽 방향으로 이동
    let moveCnt = name.length - 1; //  처음 위치에서 좌우로 움직여 커서를 한 쪽 방향으로 최대한 이동할 때의 조작 횟수를 저장
    for (let i = 0; i < name.length; i++) { // name을 한 글자씩 탐색
      const c = name.charCodeAt(i); // c는 name에서 인덱스 i의 문자를 나타내는 UTF-16 코드 유닛 값을 저장
      // 현재 위치에서 A와의 거리, Z와의 거리 중 최소값을 구하고 count에 더함
      count += Math.min(c - A, Z - c + 1);
      let nextIndex = i + 1;
      // 커서가 움직일 수 있는 가장 먼 거리를 계산
      // A가 연속으로 나오는 경우 다음 A가 아닌 문자가 나올 때까지 
      // nextIndex를 증가시키면서 연속된 A의 개수를 세고, 
      // moveCnt 변수에 현재 위치에서 왼쪽으로 이동하는 경우와 오른쪽으로 이동하는 경우 중 더 작은 값을 저장
      while (nextIndex < name.length && name.charCodeAt(nextIndex) === A) {
        nextIndex++;
      }
      moveCnt = Math.min(moveCnt, i + name.length - nextIndex + Math.min(i, name.length - nextIndex));
    }
  
    // 2. 좌우 이동 횟수에 따라 상하 이동 횟수 결정
    count += moveCnt;
    return count;
  }

console.log(joystick('JAZ')); // 11
console.log(joystick('JEROEN')); // 56
console.log(joystick('JAN')); // 23 
