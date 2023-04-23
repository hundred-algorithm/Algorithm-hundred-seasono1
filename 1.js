//모험가 길드
// 솔직히 문제를 이해 하지를  못하겠다.
function mapleStory(dodo){
    result=0
    count=0;
    dodo.sort((a,b)=>a-b)
    for(adv in dodo){
        count+=1;
        if (count >=adv){
            result +=1;
            count=0;
        console.log(adv);

        }
    }
    return result;
}
console.log(mapleStory([2,3,1,2,2]))