// 자물쇠를 오른쪽으로 돌린다
// [[0,0,0],[1,0,0][0,1,1]]8+4=12
// [i+0에 0 , 1 ,2 ]
// [i+1에 0 1 2]
// [i+2에 0 1 2]
// 자그럼 상대적 위치로 키를 기억
 
// [[1,1,1],[1,1,0][1,0,1]]7곱7로 만들기
// 5곱5로 만들준다면
// [[0,0,0,0,0][0,0,0,0,0][0,1,0,0,0][0,0,1,1,0][0,0,0,0,0]]
// [[0,0,0,0,0][0,1,1,1,0],[0,1,1,0,0][0,1,0,1,0][0,0,0,0,0]]
// [[0,0,0,0,0][0,1,1,1,0],[0,1,1,1,0][0,1,1,1,0][0,0,0,0,0]] true
// 1 상대적 위치로 만들어준다.
// 아마 그냥 식의 형태 기억 
// 회전한 형태까지 기억해야함 4가지를 그냥 만들어주면될듯

// 2.자물쇠의 추가칸까지 확보해준다
// 반복문을 통해 확보
// 3의경우 -1한값을 2번 더해줘서 7*7을 도출
// 3.반복문을 돌리면서 본자물쇠구간이 가득찬 경우를 알아본다.

function locker (key,lock){
    let keykey=[...key]
    let newkey=JSON.parse(JSON.stringify(keykey));
    let keys=[];
   
    for(q=0;q<4;q++){
        let k = key.length-1;
        for(let i=0 ;i<key.length;i++){
            for(let j=0;j<key.length;j++){
                newkey[i][j]=keykey[k][i];
                k--;
            }    
            k=key.length-1;
        }
        keys.push(newkey)
        keykey=JSON.parse(JSON.stringify(newkey));
    }
    keys=JSON.parse(JSON.stringify(keys))
    let vlock=[];
    for(let i =0;i<7;i++){
        vlock.push([]);
       
        console.log(i)
        console.log('---------------------')

    }
    for(i=0;i<lock.length+(2*(lock.length-1));i++){
        for(j=0;j<lock.length+(2*(lock.length-1));j++){
            if((i>=(lock.length-1)&&i<lock.length+(lock.length-1))&&(j>=(lock.length-1)&&j<lock.length+(lock.length-1))){
                console.log('이건')
                console.log(lock[i-(lock.length-1)][j-(lock.length-1)]);
               vlock[i][j]=lock[i-(lock.length-1)][j-(lock.length-1)]
            }
            else{
                vlock[i][j]=0
            }
        }
    }
    console.log('---------------------')
    console.log(vlock)
    console.log('---------------------')
    let count=0;
    
    for(let k=0; k<vlock.length-key.length+1;k++){
        for(let w=0; w<vlock.length-key.length+1;w++){
            let vvlock=[...vlock]
            for(key4 of keys){
                for(let i=0;i<key.length;i++){
                    for(let j=0;j<key.length;j++){
                        if(vvlock[k+i][w+j]===0&&vvlock[k+i][w+j]!==key4[i][j]){
                            vvlock[k+i][w+j]=key4[i][j];                        
                            console.log('?')
                        }                    
                    }
                }            
                let trueTest=lock.length**2;
                for(let q = lock.length-1;q<lock.length-1+lock.length;q++){
                    
                    for(let e = lock.length-1;e<lock.length-1+lock.length;e++){
                        if(vvlock[q][e]===1)trueTest-=1;
                    }
                }
                if(trueTest===0){
                    console.log(key4);
                    return console.log('끝');
                }
            }
        }
    }

}
locker([[0,0,0],[1,0,0],[0,1,1]],[[1,1,1],[1,1,0],[1,0,1]]);