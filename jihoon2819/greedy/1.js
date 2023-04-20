function change(payMoney){
    const fivehunderd = 500;
    const hunderd = 100;
    const fifty = 50;
    const ten =10;
    let answer = 0;
    let charge = payMoney;
    answer+=Math.floor(charge/fivehunderd);
    charge=charge%fivehunderd;
    answer+=Math.floor(charge/hunderd);
    charge=charge%hunderd;
    answer+=Math.floor(charge/fifty);
    charge=charge%fifty;
    answer+=Math.floor(charge/ten);

    return answer;
}

console.log(change(1860));