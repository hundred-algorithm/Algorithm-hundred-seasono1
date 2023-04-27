function solution(people, limit) {
  var answer = 0;
  people = people.sort((a,b)=>b-a);
  
  for(var i=0, j=people.length-1 ; i<=j; i++,answer++)
      if(people[i]+people[j] <= limit) j--;
  
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100))