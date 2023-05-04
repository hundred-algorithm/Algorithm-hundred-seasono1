function check3(n){
    let count=0;
    for(let h = 0 ; h <= n ;h++){
        for(let m=0;m<60;m++){
            for(let s=0;s<60;s++){
                if(h%10===3||m%10===3||Math.floor(m/10)===3||s%10===3||Math.floor(s/10)===3){
                    count++
                }
            }
        }
    }
    return(count)
}
console.log(check3(5));