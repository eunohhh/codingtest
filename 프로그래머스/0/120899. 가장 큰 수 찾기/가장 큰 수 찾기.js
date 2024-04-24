function solution(array) {
    var answer = [];
    
    let before = array[0];
    let big;
    for(let i = 0; i < array.length; i++){
        if(before < array[i]) big = array[i] 
        before = array[i];
    }
    
    const bigIdx = array.findIndex(e => e === big);
    
    answer = [big, bigIdx];
    
    return answer;
}