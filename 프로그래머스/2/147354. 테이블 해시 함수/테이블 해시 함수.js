function solution(data, col, row_begin, row_end) {
    // 주어진 col 기준 오름차순 정렬, 동일한 값이면 첫 번째 컬럼(기본키) 기준 내림차순
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0]; // 기본키 기준 내림차순
        }
        return a[col - 1] - b[col - 1]; // col 기준 오름차순
    });
    
    console.log(data)
    // row_begin과 row_end 범위의 행에 대해 각 컬럼 값을 해당 행 번호로 나눈 나머지의 합을 계산
    var answer = 0;
    for (let i = row_begin; i <= row_end; i++) {
        // 행 번호 i는 1부터 시작하는 인덱스, 배열은 0부터 시작하므로 i-1을 사용
        let rowIndex = i - 1;
        let sum = data[rowIndex].reduce((acc, value, idx) => acc + (value % i), 0);
        answer ^= sum; // XOR 연산
    }

    return answer;
}