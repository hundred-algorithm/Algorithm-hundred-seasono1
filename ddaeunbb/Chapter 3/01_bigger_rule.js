function biggerrule(m, k, arr){
  arr.sort((a,b)=> b-a);
  const first = arr[0];
  const second = arr[1];
  let count = 0;
  let previous = k;

  while( m > 0 ){
    if (previous > 0 ){
      count+=first;
      previous--;
    }
    else {
      count+=second
      previous = k;
    }
    m--;
  }
  return count;
}

console.log(biggerrule(8, 3, [2,4,5,4,6]))
console.log(biggerrule(7, 2, [3,4,3,4,3]))