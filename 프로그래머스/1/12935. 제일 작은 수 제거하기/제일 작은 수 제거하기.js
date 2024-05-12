function solution(arr) {
    var answer = [];
    
    const min = Math.min(...arr);
    
    const filtered = arr.filter(e => e !== min);
    
    if(filtered.length === 0){
        answer = [-1];
    }else{
        answer = filtered;
    }
    
    return answer;
}