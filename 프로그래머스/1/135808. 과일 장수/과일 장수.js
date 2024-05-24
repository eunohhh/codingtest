function solution(k, m, score) {
    // 일단 정렬
    score.sort((a, b) => b - a);
    
    // 최대로 나올수 있는 박스의 수 구하기
    const maxBoxs = Math.floor((score.length) / m);
    // 박스가 1개도 안나오면 그냥 0 리턴
    if(maxBoxs < 1) return 0;
    
    // 인덱스 제한을 위해 score 의 길이에서 나머지를 빼줌
    const restrict = score.length - (score.length % m);
    
    let box = [];  
    
    const reduced = score.reduce((acc, cur, idx) => { 
        // 인덱스가 제한보다 작을때(나머지까지 계산하면 안되므로) 박스에 담기
        if(idx < restrict){
            box.push(cur);
        }   
        // 박스가 최대로 찼을때
        if(box.length === m){
            // 누적에 푸시하고 박스 비움
            acc.push(box);
            box = [];
        }
        return acc;
    },[]);
    
    // 리듀스 값으로 돌려서
    const answer = reduced.reduce((acc, cur) => {
        // 박스에서 가장 작은 값 구하고
        const min = Math.min(...cur);
        // 최종 계산 
        return acc + min * m;
    }, 0)

    return answer
}