function solution(arr) {
    var answer = 0;
    
    const sum = arr.reduce((acc,cur) => acc + cur);
    
    answer = sum / arr.length;
    
    return answer;
}