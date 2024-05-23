function solution(k, score) {
    let hall = [];

    const answer = score.map((e, i) => {
        if(i <= k - 1){
            // k일 전까지는 무조건 hall 에 푸시
            hall.push(e);
            const min = Math.min(...hall);
            return min
        }else{
            // k일 이후부터는 hall 에서 가장 낮은 점수를 대체
            const min = Math.min(...hall);
            // 가장 작은 값의 인덱스 확보
            const findedIndex = hall.indexOf(min);
            // 요소가 hall 에서 가장 작은 값보다 크면
            if(e > min){
                // hall 에서 해당 값을 현재 값으로 대체
                hall[findedIndex] = e;
                const min = Math.min(...hall);
                return min;
            // 요소가 hall 에서 가장 작은 값보다 작으면, hall의 가장 작은 값 리턴
            }else {
                return min;
            }
        }
    })
    
    return answer;
}