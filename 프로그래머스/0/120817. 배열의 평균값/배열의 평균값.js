function solution(numbers) {
    var answer = 0;
    
    const reduced = numbers.reduce((acc, curr) => acc + curr);
    
    answer = reduced / numbers.length;
    
    return answer;
}