function sorted(str){
    
    let st=str.match(/[A-Z]/g).sort().join("");
    let sd=str.match(/[0-9]/g).reduce((acc,cur)=>{
        return acc+=Number(cur);
    },0)
    return st+sd;
}
console.log(sorted("ZA29"));