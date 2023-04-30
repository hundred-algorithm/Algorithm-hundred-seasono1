function reverse_str(input){
  input = input.split('');
  const arr = [];
  let str = '';

  let one = 0;
  let zero = 0;

  for (let i = 0; i < input.length; i++){
    if (input[i] === input[i+1]) str+= input[i];
    else {
      str += input[i];
      arr.push(str);
      str = '';
    }
  }
  
  arr.forEach(el => {
    if (el[0] === '0') zero++;
    else one++;
  })

  return Math.min(one,zero)
}

console.log(reverse_str('11111'));
console.log(reverse_str('0001100'));
console.log(reverse_str('1001000'));
console.log(reverse_str('11001100110011000001'));
