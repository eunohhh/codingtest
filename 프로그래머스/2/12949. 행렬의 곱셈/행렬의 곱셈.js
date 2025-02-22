function solution(arr1, arr2) {
    // 1. 행렬 arr1 과 arr2 의 행과 열의 수
    const row1 = arr1.length;
    const column1 = arr1[0].length;
    const row2 = arr2.length;
    const column2 = arr2[0].length;
    
    // 2. 결과를 저장할 2차원 배열 초기화
    // 결과 행렬의 크기는 row1 * column2 이므로 
    // 해당 크기의 배열을 미리 만들고 0으로 초기화
    const result = [];
    for (let i = 0; i < row1; i++) {
        result.push(new Array(column2).fill(0));
    }
    
    // 3. 첫번째 행렬 arr1의 각 행과 두번째 행렬 arr2 각 열에 대해
    for (let i = 0; i < row1; i++) {
        for (let j = 0; j < column2; j++) {
            // 4. 두 행렬의 데이터를 곱해 결과 배열에 더해줌
            // 첫번째 행렬의 i 번째 행과 두번째 행렬의 j번째 열을 곱하기 
            for (let k = 0; k < column1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    
    return result;
    
}