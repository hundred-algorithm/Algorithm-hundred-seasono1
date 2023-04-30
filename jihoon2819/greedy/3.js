function 문자열남기기(numbers){
     numbers=numbers.split(/0+/);
    const zero = numbers.filter((value)=>value==='').length
    const one = numbers.length-zero
    return zero>one?one:zero
}
console.log(문자열남기기("0001100"));
