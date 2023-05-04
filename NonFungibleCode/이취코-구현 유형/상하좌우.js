// N * N 크기의 정사각형 칸이 주어짐
// 시작 좌표 (1,1), L R U D 중 하나의 문자가 반복적으로 적힌 계획서 존재
// 정사각형 바깥으로 움직이는 것은 무시해야 함
// (x, y) -> U, D는 y값 변경 L, R은 x값 변경

function solution(N, direction) {
    let row = 1;
    let col = 1;
    // 최초 시작 좌표 (1,1)
    let directionList = direction.split(" ");
    // 입력되는 계획서를 공백을 기준으로 나누기
    for(let i = 0; i < directionList.length; i++) {
        // 계획서에 입력된 조건에 따라 움직이기
        switch(directionList[i]) {
            case "L":
                row > 1 && row--;
                break;
            case "R" :
                row < N && row++; 
                break;
            case "U" :
                col > 1 && col--;
                break;
            case "D" :
                col < N && col++;
                break;
            default:
                console.log("Wrong Direction");
        }
    }
    console.log(col, row);
}
solution(5, "R R R U D D");