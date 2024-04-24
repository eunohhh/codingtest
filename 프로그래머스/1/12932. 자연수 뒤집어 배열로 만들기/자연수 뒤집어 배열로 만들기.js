function solution(n) {
    var answer = [];
    
    const array = String(n).split('');
    
    const numberArray = array.map(e => Number(e));
    
    answer = numberArray.reverse();
    
    return answer;
}