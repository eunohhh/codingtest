function solution(absolutes, signs) {
    var answer = 0;
        
    absolutes.forEach((e, i) => {
        if(signs[i] === true){
            answer += e;
        }else{
            answer += -e;
        }
    })
            
    return answer;
}