function travel(n,road){
    let xy=[1,1]    
    road.forEach((value)=>{
        if(value==='L'){
            if(xy[1]<2){             
            }else{
                xy[1]-=1;
            }
        }else if(value==='R'){
            if(xy[1]>=n){                
            }else{
                xy[1]+=1;
            }
        }else if(value==='U'){
            if(xy[0]<2){                
            }else{
                xy[0]-=1;
            }
        }else{
            if(xy[0]>=n){                
            }else{
                xy[0]+=1;
            }
        }
    })   
    return `${xy[0]} ${xy[1]}`
}
console.log(travel(5,['R','R','R','U','D','D']));