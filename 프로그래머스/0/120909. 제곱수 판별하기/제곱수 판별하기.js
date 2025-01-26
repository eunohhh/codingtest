function solution(n) {
    const sqrt = Math.sqrt(n);
    const isInteger = Number.isInteger(sqrt);
    if(isInteger) return 1;
    else return 2;
}