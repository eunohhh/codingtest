function solution(x) {
    var answer = true;
    
    const stringed = String(x);
    
    if(stringed.length >= 2){
        const splited = stringed.split('');
        const arr = splited.map(e => Number(e));
        const sum = arr.reduce((acc,curr) => acc + curr);
        if(x % sum === 0) {
            answer = true;
        }else{
            answer = false;
        }
    }else{
        if(x % x === 0) {
            answer = true;
        }else{
            answer = false;
        }
    };
    
    return answer;
}