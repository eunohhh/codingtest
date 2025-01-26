function solution(n) {
    return Array(n)
        .fill(0)
        .map((_, idx) => idx + 1)
        .filter((num) => n % num === 0);
}