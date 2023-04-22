// function untilOne(N, K){
//   let count = 0;

//   while ( N > 1){
//     if ( N % K === 0) N = N / K;
//     else N--;
//     count++;
//   }
//   return count;
// }

function untilOne(N, K){
  let count = 0;

  while ( N > 1){
    if ( N % K === 0) {
      N = N / K;
      count++;
    } else {
      let minus = K > N ?  N % K - 1 : N % K;
      N -= minus;
      count += minus;
    };
  }
  return count;
}

console.log(untilOne(25, 3))