// 00시 00분 00초 부터 N시 59분 59초까지 3이 포함되는 모든 경우의 수 구하기
// let N = Math.floor(Math.random() * 24) + 1
// // 1~24 사이의 임의의 N을 만드는 코드
let N = 5

function countNumberWith3(N) {
    let count = 0;
    
    for(let i = 0; i <= N; i++) {
        for(let j = 0; j < 60; j++) {
            for(let k = 0; k < 60; k++) {
                let time = i.toString() + j.toString() + k.toString();
                if(time.indexOf('3') !== -1) {
                    count++
                }
            }
        }
    }
    return count;
}
let result = countNumberWith3(N);
console.log(result)