function cantmk_money(input){
  let [count, set] = input.split('\n');
  // if (count === '1') return set
  set = set.split(' ').map(Number).sort((a,b)=> b-a);

  let num = 1;
  while ( num >= 1){
    let copy = num;
    for(let i = 0; i < set.length; i++){
      if (copy === 0) break;
      if (copy - set[i] >= 0){
        copy = copy - set[i];
      }
    }
    
    if (copy > 0 ) break;
    num++;
  }
  return num
}

console.log(cantmk_money(`5
3 2 1 1 9`))