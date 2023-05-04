// 입력된 문자열의 모든 알파벳을 오름차순으로 정렬
// 그 뒤에 모든 숫자를 더한 값을 이어서 출력

function solution(S) {
    const split = S.split("");

    let str = [];
    let num = [];
    for(let i = 0; i < S.length; i++) {
        if(isNaN(S[i])) {
            str.push(S[i])
        } else {
            num.push(S[i])
        }
    }
    const sortStr = str.sort().join("");
    const sumNum = num.map((e) => Number(e)).reduce((acc, cur) => acc + cur)
    return sortStr + sumNum;
}
console.log(solution("K1KA5CB7"))