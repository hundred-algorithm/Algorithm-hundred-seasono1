function bowlingball(input){
  const [total, balls] = input.split('\n');
  const totalBalls = Number(total[0]);
  let chooseTotal = totalBalls * (totalBalls-1) / 2;

  let dict ={};
  const arr = balls.split(' ');
  arr.forEach(el => dict[el] ? dict[el]++ : dict[el] = 1);

  let common = Object.values(dict).filter(el => el >= 2);
  let minus = 0;
  common.forEach(el => {
    minus += el * (el-1) / 2;
  })

  return chooseTotal - minus;
}

console.log(bowlingball(`5 3
1 3 2 3 2`));

console.log(bowlingball(`8 5
1 5 4 3 2 4 5 2`));