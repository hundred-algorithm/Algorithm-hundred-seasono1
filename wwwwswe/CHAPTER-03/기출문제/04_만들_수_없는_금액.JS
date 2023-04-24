// N : 동전 갯수
    // 동전은 임의의 화폐 단위
// N의 동전들로 만들 수 없는 금액의 최솟값 구하기
// arr의 숫자들로 만들수 있는 금액은 덧셈으로만 구하면 됨 (금액이기 때문에)

// N : 5, arr : 3, 2, 1, 1, 9 일 경우
    // arr의 동전을 활용해서 만들 수 있는 모든 수를 만들고 그 중 만들 수 없는 수의 최솟값을 구함
    // ex. 1 = 1, 1+1 = 2, 3 = 3, 1+1+2=4, 3+1+1 or 3+2 = 5, 3+2+1 = 6, 3+2+1+1 = 7, 8은 불가, 9 = 9
    // 즉 최솟값은 8

    // 1원이 없을 경우 최솟값은 1이 됨

function minimumValue(N, arr) {
    arr.sort((a, b) => a - b); // arr 정렬

    // 1원이 없을 경우 어차피 최솟값은 1
    let result = 1;

    for (let i =0; i < N; i++) {
        // 만들 수 없는 result(금액)가 현재 가지고 있는 동전(arr[i])보다 작거나 같으면 result에 동전을 더해서 만들 수 있는 금액을 구함
        if(result >= arr[i]) { // result가 들어오면서 만들 수 있는 수를 만듦
            result += arr[i]
        } else { // 그렇지 않으면 동전을 추가해도 만들 수 없는 금액이므로 result를 반환
            break; // break로 최솟값만 찾은 후 for문을 멈춤, 없으면 끝까지 돌게 됨
        }
    }
    return result;  
}

const N = 3;
const arr = [3, 5, 7];

console.log(minimumValue(N, arr)); // 1