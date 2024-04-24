function solution(n){

    const array = String(n).split('');
    
    const mapped = array.map(e => Number(e));
    
    const sum = mapped.reduce((acc, curr) => acc + curr);
    
    return sum;
}