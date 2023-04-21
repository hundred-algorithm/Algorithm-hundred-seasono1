// n을 lst의 가장 큰 수부터 나눠서 갯수를 구함, 가장 큰 단위 ~> 가장 작은 단위까지
// 갖고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이므로 작은 단위의 동전들을 종합해 다른 해가 나올 수 없기 때문에 가능

function countChange(n) {
    const lst = [500, 100, 50, 10];
    let count = 0;
  
    for (let coin of lst) {
      count += Math.floor(n / coin);
      n %= coin;
    }
  
    return count;
  }
  
  console.log(countChange(1260)) // 6