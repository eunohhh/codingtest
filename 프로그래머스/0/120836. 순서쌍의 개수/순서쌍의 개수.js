function solution(n) {
    const measures = Array(n).fill(0).map((_, idx) => idx + 1).filter((num) => n % num === 0);    
    return measures.length;
}