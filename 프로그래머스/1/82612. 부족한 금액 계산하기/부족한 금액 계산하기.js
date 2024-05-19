function solution(price, money, count) {
    let answer = -1;
    
    let arr = [];
    for(let i = 0; i < count; i++){
        if(i === 0){
            arr.push(price);
        }else{
            arr.push(arr[i - 1] + price);
        }
    }
    
    const sum = arr.reduce((acc, curr) => acc + curr);
    
    const minus = money - sum;
    
    if(minus < 0){
        answer = Math.abs(minus);
    }else{
        answer = 0;
    }
        
    return answer;
}