// 시뮬레이션 유형

// 가장 왼쪽 위 좌표는 (1, 1) 가장 오른쪽 아래 좌표는 (N, N)
// A는 상, 하, 좌, 우 방향으로 이동
// 시작 좌표는 항상 (1, 1)

// 계획서 : 띄어쓰기를 기준으로 L, R, U, D 중 문자가 반복하여 적혀있다
    // L : 왼쪽으로 한 칸 이동
    // R : 오른쪽으로 한 칸 이동
    // U : 위로 한 칸 이동
    // D : 아래로 한 칸 이동
//여행자가 N * N 크기의 정사각형 공간을 벗어나는 움직임은 무시 

// N : 5, plans : [R R R U D D], return : 3 4

function findDestination(n, plans) {
    // 지도의 초기값 설정
    let x = 1, y = 1;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const move_types = ['L', 'R', 'U', 'D'];

    for (let i = 0; i < plans.length; i++) {
      // plans 배열의 각 요소를 plan 변수에 저장
      let plan = plans[i];
      // nx와 ny 변수를 초기화
      let nx, ny;
  
      for (let j = 0; j < move_types.length; j++) {
        // plan이 move_types 배열의 어떤 요소와 일치하는지 찾음
        if (plan === move_types[j]) {
          // 일치하는 요소를 찾으면, 현재 위치인 [x, y]에서 dx[j]와 dy[j]를 각각 더한 값을 nx와 ny에 저장하고, 내부 반복문을 종료  
          nx = x + dx[j];
          ny = y + dy[j];
          break;
        }
      }
      
      // nx와 ny가 유효한 위치인지 확인하고, 유효하지 않으면 반복문의 다음 단계로 건너뜀
      if (nx < 1 || ny < 1 || nx > n || ny > n) {
        continue;
      }
      // 유효하다면  x와 y를 각각 nx와 ny로 업데이트
      x = nx;
      y = ny;
    }
    
    //  x와 y 값을 가지고 있는 배열을 반환
    return [x, y];
  }
  
  // 예시 사용법
  let n = 5;
  let plans = ['R', 'R', 'R', 'U', 'D', 'D'];
  let [x, y] = findDestination(n, plans);
  console.log(x, y); // 3 4
  