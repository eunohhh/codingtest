function solution(numbers) {
    
    const zeroToTen = new Array(10).fill(0).map((e,i) => i);
    
    const difference = zeroToTen.filter(e => !numbers.includes(e));    
    
    const sum = difference.reduce((acc, curr) => acc + curr);
    
    return sum;
}