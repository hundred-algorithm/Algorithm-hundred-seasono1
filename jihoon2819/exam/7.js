function luckyStrike(n){
    const nn=n.toString()
    const devide =nn.length;
    const front=nn.slice(0,devide/2)
    const back=nn.slice(devide/2,devide);
    if(front===back){
        return "LUCKY"
    }else{
        return "READY"
    }
}
console.log(luckyStrike(222122))