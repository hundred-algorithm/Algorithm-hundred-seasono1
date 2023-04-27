function solution(n, lost, reserve){
    // 모든 학생들이 수 체육복을 가졌을 때
    const clothes = Array(n).fill(1);

    // 체육복 잃어버린 애들 0개로 만들기
    lost.forEach(el => clothes[el -1] = 0);

    // 체육복 여분있는 애들 +1 해주기
    reserve.forEach(el => clothes[el -1]+=1);

    //for문으로 돌면서 빌려주기 시작하기
    for (let i = 0; i < n; i++){
        //이전에 있는 학생이 체육복이 2개인 경우
        if(clothes[i] === 0 && clothes[i-1] === 2){
            clothes[i] = 1;
            clothes[i-1] = 1;
        }
        // 다음 있는 학생이 체육복이 2개인 경우
        else if (clothes[i] === 0 && clothes[i+1] === 2){
            clothes[i] = 1;
            clothes[i+1] = 1;
        }
    }
    return clothes.filter(el => el > 0).length;
}

solution(5, [2,4], [1,3,5])