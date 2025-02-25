function solution(N, stages) {
    // 1. 스테이지별 도전자 수를 구하라
    // N 번째 스테이지를 클리어한 사용자는 stage가 N + 1
    // 배열에서 N + 1 위치에 데이터를 저장해야하는데
    // 제로인덱스이므로 N + 1에 저장하려면 N + 2 크기의 배열 필요
    const challenger = new Array(N + 2).fill(0);
    for (const stage of stages) {
        challenger[stage] += 1;
    }
    
    // 2. 스테이지 별 실패한 사용자 수 계산용 변수 생성
    const fails = {};
    let total = stages.length;
    
    // 3. 각 스테이지를 순회하며, 실패율 계산
    for (let i = 1; i <= N; i++) {
        if(challenger[i] === 0) {
            // 4. 도전한 사람이 없는 경우, 실패율은 0
            fails[i] = 0;
            continue;
        }
    
        // 5. 실패율 계산
        fails[i] = challenger[i] / total;
        
        // 6. 다음 스테이지 실패율을 구하기위해 현재 스태이지의 인원만큼 감소
        total -= challenger[i];
    }
    
    // 7. 실패율이 높은 스테이지부터 내림차순 정렬
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
    
    // 8. 스테이지 번호만 반환
    return result.map((v) => Number(v[0]));
}