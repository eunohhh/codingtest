function solution(a, b) {
    var answer = 0;
    
    let arr = [];
    
    if(a < b){
        for(let i = a; i <= b; i++){ 
            // arr = [...arr, i];
            arr.push(i)
        }
    }else if(a > b){
        for(let i = b; i <= a; i++){ 
            arr.push(i)
        }
    }else{
        return a
    }

    answer = arr.reduce((acc, curr) => acc + curr);
    
    return answer;
}