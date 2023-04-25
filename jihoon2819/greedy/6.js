function solution(food_times, k) {
    let answer = 0;
    let ft=food_times.slice();
    
    for(let i = 0 ; i <= k ; i++){
        if(ft[i%(ft.length)]!==0){
            ft[i%(ft.length)]-=1
        }else{
            k+=1;
        }
    }
    k=k%ft.length+1
    return k;
}
