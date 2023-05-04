// 캐릭터는 1*1의 정사각형으로 이루어진 N * M 크기의 직사각형에 존재
// 각각의 칸은 육지이거나 바다
// 캐릭터는 동서남북 중 한 곳을 바라본다
// 칸은 (A, B)로 나타낼 수 있고 A는 북쪽으로부터 떨어진 칸의 개수, B는 서쪽으로부터 떨어진 칸의 개수
// 캐릭터는 상하좌우로 움직일 수 있고 바다로 된 칸은 갈 수 없다
// 현재 위치에서 현재 방향을 기준으로 왼쪽 방향부터 차례대로 갈 곳을 정함
// 왼쪽에 아직 가보지 않은 칸이 있다면 왼쪽으로 회전한 후에 추가로 1칸 전진
// 입력조건: N M, 방향 d(0:북쪽, 1:동쪽, 2:남쪽, 3:서쪽)

function solution(initialSize, initialLocation, initialMap) {
	let size = initialSize.split(" ").map(x => parseInt(x)); // [0]: n, [1]: m
	let map = initialMap.split("\n").map(x => x.split(" ").map(y => parseInt(y)));
	let location = initialLocation.split(" ").map(x => parseInt(x)); // [0]: x, [1]: y, [2]: direction
	let curX = location[0];  // 현재 x 위치
	let curY = location[1];  // 현재 y 위치
	let nextX = location[0]; // 이동할 x 위치
	let nextY = location[1]; // 이동할 y 위치
	let dir = location[2];   // 현재 캐릭터가 바라보고 있는 방향
	
	let dirActionList = [[0, -1], [1, 0], [0, 1], [-1, 0]]; // 인덱스 0: 북, 1: 동, 2: 남, 3: 서
	let dirCount = 0; // 캐릭터 회전 횟수
	
	const LAND = 0; // 육지
	const SEA = 1;  // 바다
	const DONE = 2; // 가본 타일
	
	let moveCount = 1; // 방문한 타일 수
	
	let isGo = true;
	while(isGo) {
		// 1. 왼쪽 방향으로 회전 및 캐릭터 회전 횟수 증가
		dir - 1 < 0 ? dir = 3 : dir--;
		dirCount++;
		
		// 2. 이동할 위치 선정
		nextX = curX + dirActionList[dir][0];
		nextY = curY + dirActionList[dir][1];
		
		if(map[nextY][nextX] === LAND) { // 3. 이동할 수 있는 타일인 경우
			// 현재 위치한 타일(LAND)를 가본 타일(DONE)으로 변경
			map[curY][curX] = DONE;
			
			// 전진
			curX = nextX;
			curY = nextY;
			
			// 이동한 타일 횟수 증가
			moveCount++;
			
			// 캐릭터 회전 횟수 초기화
			dirCount = 0;
		} else if(dirCount === 4) { // 4. 이동할 수 없고 4번 회전한 경우
			// 후진할 위치 선정
			nextX = curX - dirActionList[dir][0];
			nextY = curY - dirActionList[dir][1];
			
			if(map[nextY][nextX] === SEA) { // 후진할 수 있는 타일이 아닌 경우(SEA인 경우)
				// 게임 종료
				isGo = false;
			} else { // 후진할 수 있는 타일인 경우(LAND 혹은 DONE)
				// 현재 위치한 타일을 가본 타일로 변경
				map[curY][curX] = DONE;
				
				// 후진
				curX = nextX;
				curY = nextY;
				
				// 캐릭터 회전 횟수 초기화
				dirCount = 0;
			}
		}
	}
	console.log(moveCount);
	return moveCount;
}
let testSize = "4 4";
let testLocation = "1 1 0";
let testMap = `1 1 1 1
1 0 0 1
1 1 0 1
1 0 0 1
1 1 1 1`;

// 실행결과: 5
solution(testSize, testLocation, testMap);