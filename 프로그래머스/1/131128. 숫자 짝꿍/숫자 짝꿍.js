function solution(X, Y) {
    // 각 숫자별 등장 횟수를 저장할 배열을 선언
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    
    // X에서 각 숫자의 등장 횟수를 카운팅
    for (let i = 0; i < X.length; i++) {
        countX[X[i]]++;
    }

    // Y에서 각 숫자의 등장 횟수를 카운팅
    for (let i = 0; i < Y.length; i++) {
        countY[Y[i]]++;
    }
    let result = [];            

     // 9부터 0까지 숫자에 대해 공통으로 등장한 만큼 배열에 추가
    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);
        if (commonCount > 0) {
            result.push(String(i).repeat(commonCount));
        }
    }
    // 결과 배열을 문자열로 변환
    const answer = result.join('');

    // 예외 처리
    if (answer === '') {
        return '-1';
    } else if (answer[0] === '0') {
        return '0';
    } else {
        return answer;
    }
}