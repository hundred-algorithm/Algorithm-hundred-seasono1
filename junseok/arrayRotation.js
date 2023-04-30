// 배열 회전 시 인덱스 요소 새롭게 정립하는 코드 (시계 방향 기준)

// 총 4가지 방향이 나온다
const arr = [
  [1, 0, 0],
  [0, 1, 1],
  [1, 1, 1],
];

for (let i = 0; i < 4; i++) {
  rotate_arr(arr, i);
}
function rotate_arr(arr, rot) {
  // 깊은 복사 2차원 배열 하나 만들기
  const { length } = arr;
  const hor = new Array(arr[0].length).fill(0);
  const copyArr = hor.map((item) => [...hor]);
  for (let i = 0; i < copyArr.length; i++) {
    for (let j = 0; j < copyArr[i].length; j++) {
      if (rot === 0) {
        // 회전이 없기 때문에 그대로 출력
        copyArr[i][j] = arr[i][j];
      }
      // 시계 방향으로 한번 회전 하면 1열이 1행이 된다.
      //[0][0]의 값이 [2][0]의 값이 된다.
      else if (rot === 1) {
        copyArr[i][j] = arr[length - 1 - j][i];
      }
      // 180도 시계 방향으로 회전
      //[length-1][length-1] = [0][0]의 값이 된다.
      else if (rot === 2) {
        copyArr[i][j] = arr[length - 1 - i][length - 1 - j];
      }
      //시계 반대방향으로 90도 회전한다
      // 2열의 값들이 1행이 된다.
      else {
        copyArr[i][j] = arr[j][length - 1 - i];
      }
    }
  }
  console.log(copyArr);
}

[
  [1, 0, 0],
  [0, 1, 1],
  [1, 1, 1],
],
  [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 0],
    [0, 0, 1],
  ],
  [
    [0, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ];
