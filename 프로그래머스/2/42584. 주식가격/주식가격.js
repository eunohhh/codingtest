function solution(prices) {
    const length = prices.length;
    const answer = new Array(length).fill(0); // 1. 가격이 떨어지지 않은 기간을 저장할 배열
    
    // 스택을 이용해 이전 가격과 현재 가격을 비교
    const stack = [0]; // 2.스택 초기화
    for(let i = 0; i < length; i++) {
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            // 3.가격이 떨어졌으므로 이전 가격의 기간을 계산
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }
    
    // 스택에 남아 있는 가격들은 가격이 떨어지지 않은 경우
    while(stack.length > 0) {
        const j = stack.pop();
        answer[j] = length - 1 - j;
    }
    
    return answer;
}