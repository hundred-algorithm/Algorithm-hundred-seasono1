function minus_plus(input){
  const arr = input.split('');
  const answer= arr.reduce((acc, cur) => {
    if(Number(acc) === 0) return Number(acc) + cur;
    else return acc * cur
  })
  return answer;
}

console.log(minus_plus('02984'));
console.log(minus_plus('567'));