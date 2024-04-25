function solution(num) {
    var answer = 0;
    let copy = num;
    let count = 0;
        
    if(num === 1){
        return 0;
    }
    
    while(true){
        if(copy === 1) break;
        if(count === 500) break;
        
         // even
        if(copy % 2 === 0){
            copy = copy / 2;
            count++
        // odd
        }else{
            copy = copy * 3 + 1;
            count++
        }
    }

    answer = count;
    if(answer === 500) return -1;
    return answer;
}