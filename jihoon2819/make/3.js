function knight(place){
    let dx=[-2,-2,-1,-1,1,1,2,2];
    let dy=[1,-1,-2,2,-2,2,1,-1];
    let count =0;
    let currentplace=place.split("");
    currentplace[0]=currentplace[0].charCodeAt(0)-96;
    currentplace[1]=Number(currentplace[1])
    for(let i = 0 ; i < 8 ; i++){
        if(currentplace[0]+dx[i]<2||currentplace[0]+dx[i]>8||currentplace[1]+dy[i]<2||currentplace[1]+dy[i]>8){}
        else{count+=1;}
    }
    return count
}
console.log(knight("f5"));