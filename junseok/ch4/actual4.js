// 자물쇠와 열쇠
function solution(key, locks) {
  const offset = key.length - 1;

  // 열쇠 위치 만들기 시작점 기준으로 만들기
  for (let r = 0; r < offset + locks.length; r++) {
    for (let c = 0; c < offset + locks.length; c++) {
      //열쇠 돌려보기
      for (let rot = 0; rot < 4; rot++) {
        //넓은 지도 만들기
        const hor = new Array(58).fill(0);
        const map = hor.map((item) => [...hor]);
        //자물쇠 복사하기
        for (let i = 0; i < locks.length; i++) {
          for (let j = 0; j < locks.length; j++) {
            map[offset + i][offset + j] = locks[i][j];
          }
        }
        //  돌려서 키 맞추어 보기
        match(map, key, rot, r, c);
        if (check_lock(map, offset, locks.length)) {
          return true;
        }
      }
    }
  }
  return false;
}

function match(map, key, rot, r, c) {
  const { length } = key;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // 회전 방향에 맞추어서 key 값 추가하기
      if (rot === 0) {
        map[r + i][c + j] += key[i][j];
      } else if (rot === 1) {
        map[r + i][c + j] += key[length - 1 - j][i];
      } else if (rot === 2) {
        map[r + i][c + j] += key[length - 1 - i][length - 1 - j];
      } else {
        map[r + i][c + j] += key[j][length - 1 - i];
      }
    }
  }
}

//자물쇠의 중간 부분이 모두 1인 지 확인
function check_lock(map, offset, length) {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (map[offset + i][offset + j] !== 1) return false;
    }
  }
  return true;
}

/* solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  ); */
