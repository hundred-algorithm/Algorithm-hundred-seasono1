function cardGame(input){
  input = input.split('\n');
  input.splice(0,1);
  input = input.map(el => {
    el = el.split(' ');
    return Math.min(...el)
  });
  
  return Math.max(...input)
}


console.log(cardGame(`3 3
3 1 2
4 1 4
2 2 2`))