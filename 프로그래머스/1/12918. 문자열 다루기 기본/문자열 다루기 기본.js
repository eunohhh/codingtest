function solution(s) {
    var answer = true;
    
    const arr = [...s];
    
    if(arr.length === 4 || arr.length === 6){
        let temp;
        arr.forEach(e => {
            const a = Number(e);
            if(isNaN(a)) temp = false;
        })
        if(temp === false) {
            answer = false;
        }else{
            answer = true;
        }
    }else{
        answer = false;
    }
    
    return answer;
}