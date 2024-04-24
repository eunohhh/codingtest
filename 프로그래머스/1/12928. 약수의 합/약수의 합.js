function solution(n) {
    let every = []
    let index = 1;
    
    while (index <= n) {
      if (n % index === 0) every.push(index);
      index++;
    }
    
    // 배열 길이가 0 일 경우도 대비해서
    // 초기값 0 설정
    const sum = every.reduce((acc, curr) => acc + curr, 0);
    
    return sum;
}