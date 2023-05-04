// 8*8의 체스판이 주어짐
// 가로는 a~h, 세로는 1~8로 표현
// 체스에서 L자 방식으로 움직이는 나이트가 이동 가능한 위치의 경우의 수를 구하는 코드 작성
// 나이트는 체스판의 밖으로는 나갈 수 없는 부분도 구현해야 함
// 아스키 코드 사용


function solution(place) {
	const col = parseInt(place[0].charCodeAt(0)) - 96; // a ~ h -> 1 ~ 8
	const row = parseInt(place[1]); // 0 ~ 8
	const stepList = [[-2, 1], [-2, -1], [2, 1], [-2, -1], [1, -2], [1, 2], [-1, 2], [-1, -2]];
	let count = 0;
	
	for(let i = 0; i < stepList.length; i++) {
		let stepCol = stepList[i][0];
		let stepRow = stepList[i][1];
		
		if((col + stepCol >= 1 && row + stepRow >= 1) && (col + stepCol <= 8 && row + stepRow <= 8)) {
			count++;
		}
	}
	console.log(count);
  return count;
}
// 실행 결과 8개
solution("e4");

// 실행 결과 2개
solution("a1");