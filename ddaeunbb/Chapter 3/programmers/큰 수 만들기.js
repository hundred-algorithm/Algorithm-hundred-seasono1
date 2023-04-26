function solution(number, k){
  const arr = [];

  for( let num of number){
    while ( arr.length > 0 && k > 0 && arr[arr.length -1] < num){
      arr.pop();
      k--;
    }
    arr.push(num);
  }
  return arr.join('')
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
