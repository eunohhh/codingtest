function solution(sizes) {
    var answer = 0;
    
    var bigMax = 0;
    var smallMax = 0;
    
    for(let i = 0; i < sizes.length; i++){
        // 0 큰변일때
        if(sizes[i][0] > sizes[i][1]){
            if(bigMax < sizes[i][0]){
                bigMax = sizes[i][0];
            }
            if(smallMax < sizes[i][1]){
                smallMax = sizes[i][1];
            }
        // 0이 작은변 일때 
        }else{
            if(bigMax < sizes[i][1]){
                bigMax = sizes[i][1];
            }
            if(smallMax < sizes[i][0]){
                smallMax = sizes[i][0];
            }
        }
    };
    
    answer = smallMax * bigMax;
    
    return answer;
}