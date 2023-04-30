function solution(name){
  let move = 0;
  
  const codeTable = {
    A : 'A'.charCodeAt(),
    Z : 'Z'.charCodeAt() + 1
  };

  // 상하 움직임 구하기
  for(let i = 0; i < name.length; i++){
    let transfer = name[i].charCodeAt();
    move += Math.min(transfer - codeTable['A'], codeTable['Z'] - transfer);
  }

  // 좌우 움직임 구하기
  let leastMove = name.length -1;
  let nextIdx = 0;

  for(let i = 0; i < name.length; i++){
    nextIdx = i + 1;
    while (nextIdx < name.length && name[nextIdx] === 'A'){
      nextIdx++;
    }
    if (nextIdx !== i + 1){
      leastMove = Math.min(leastMove, 2 * i + name.length - nextIdx);
      break;
    }
  }

  return move + leastMove
}


console.log(solution("JAN"))