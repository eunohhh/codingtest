function solution(x, n) {
    var answer = [x];
    
    let before = x;
    for(let i = 0; i < n -1; i++){
        answer.push(before + x);
        before = before + x;
    }
    
    
    return answer;
}