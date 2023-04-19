//01. 큰 수의 법칙
//arr.length = N (2 ~ 1000)
//동일한 인덱스에 해당하는 숫자는 최대 K번 연속해서 더할 수 있음 (K = 1~10000)
//배열의 수들을 M번 더해서 가장 큰 수를 출력 ( M = 1~10000) (K <= M)
//동일한 인덱스가 K번만 더해지게 하는 방법?
const arr = [1, 3, 7, 20, 5, 44, 17, 22, 50, 9, 31, 20, 5, 3, 22]
const M = 11
const K = 3

function solution(arr, M, K) {
let newArr = [];
let answer = arr.sort((a, b) => b -a ); 
for(let i = 0; i < K; i++) {
    newArr[i] = arr[]
} 
return answer;

}
console.log(solution(arr))
