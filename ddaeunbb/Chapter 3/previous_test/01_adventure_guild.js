function adventure_guild(input){
  const [ input1, input2 ] = input.split('\n');
  const people = input2.split(' ').map(Number).sort((a,b)=> a-b);
  let group = 0;
  let member = 0;

  for (const fear of people){
    member++;
    if (member >= fear){
      group++;
      member = 0;
    }
  }
  return group;
}


console.log(adventure_guild(`5
2 3 1 2 2`))