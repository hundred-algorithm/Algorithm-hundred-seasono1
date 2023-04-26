// people : 사람들의 몸무게
// limit : 무게제한

// 구명보트는 2명까지만 탈 수 있으며 limit가 있음
// people 2명의 합이 limit를 초과하면 탈 수 없음
// 구명보트를 최대한 적게 활용하며 구출할때 필요한 구명보트의 수를 구함

function solution(people, limit) {
    // 몸무게를 오름차순으로 정렬
    people.sort((a, b) => a - b);
  
    let boatt = 0; // 보트 개수
    let light = 0; // 정렬후 제일 가벼운 사람
    let heavy = people.length - 1; // 제일 무거운 사람, 제일 무거운 사람이 limit보다 크면 어차피 보트가 필요함
  
    // light와 heavy를 이용해 최대 2명씩 태우면서 limit 이내로 태울 수 있는 인원 수를 계산
    while (light <= heavy) {
      if (people[light] + people[heavy] <= limit) {
        light++; // 둘이 합쳐서 limit 안에 들어오면 light를 +1
      }
      heavy--; // 둘이 합쳐서 limit를 초과하면 heavy에서 -1 
      boatt++; 
    }
  
    return boatt;
  }
  
  
  console.log(solution([70, 50, 80, 50], 100)); // 3 
