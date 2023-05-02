// 현재 캐릭터 점수 : N
// 특정조건 : N을 반으로 나눠 왼쪽 자릿수와 오른쪽 자릿수 합이 같을때 사용가능

// N을 받으면 반으로 잘라 왼쪽의 합과 오른쪽의 합을 비교해서 사용 가능 여부 리턴

function specialMove(n) {
    // n을 문자열로 변환해서 잘라주고 숫자로 변환
  const arr = n.toString().split('').map(Number);
  // 배열의 길이를 2로 나눔
  const midpoint = arr.length / 2;

  // 배열을 왼쪽과 오른쪽으로 나누고 배열의 합을 구함
  const leftSum = arr.slice(0, midpoint).reduce((sum, num) => sum + num, 0);
  const rightSum = arr.slice(midpoint).reduce((sum, num) => sum + num, 0);

  // 왼쪽과 오른쪽을 비교
  if (leftSum === rightSum) {
    return('LUCKY');
    // 필살기 구현
  } else {
    return('READY');
  }
}

console.log(specialMove(7755))
