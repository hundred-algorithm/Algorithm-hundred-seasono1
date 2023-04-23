function 곱하기혹은더하기 (numbers){
    numbers=numbers.split("").map((value)=>Number(value));    
    for(let i = 0 ; i < numbers.length;i++){
        if(numbers[i]<=1&&i<numbers.length-1){
            numbers[i+1]+=numbers[i];
        }else if(i<numbers.length-1===true){
            numbers[i+1]*=numbers[i];
        }
    }
    return numbers.pop();
}

console.log(곱하기혹은더하기("02984"));
console.log(곱하기혹은더하기("567"))