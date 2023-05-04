let number = "94328912854321";
let k = 10;
function solution(number, k) {
    let result = '';
    let idx = 0;
  
    for (let i = 0; i < number.length - k; i++) {
      let max = '0';
      for (let j = idx; j <= i + k; j++) {
        if (number[j] > max) {
          max = number[j];
          idx = j + 1;
        }
      }
      result += max;
    }
    return result;
  }
  console.log(solution(number, k));

//   const stack = [];
//   for (let i = 0; i < number.length; i++) {
//     const current = number[i];
//     while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
//       stack.pop();
//       k--;
//     }
//     stack.push(current);
//   }
//   stack.splice(stack.length - k, k);
//   const answer = stack.join('');
//   return answer;