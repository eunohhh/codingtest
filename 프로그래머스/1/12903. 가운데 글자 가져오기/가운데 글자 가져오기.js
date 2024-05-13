function solution(s) {
    var answer = '';
        
    if(s.length % 2 === 0){
        const middle = s.length / 2;
                
        answer = s.substring(middle - 1, middle + 1);
        
    }else{
        const middle = Math.ceil(s.length / 2);
        
        answer = s.substring(middle - 1, middle);
    }
    
    return answer;
}