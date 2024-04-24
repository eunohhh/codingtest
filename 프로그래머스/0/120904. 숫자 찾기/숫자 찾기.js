function solution(num, k) {
    var answer = 0;
    
    const stringed = String(num);
    const finded = stringed.indexOf(String(k));
    
    if(finded !== -1){
        answer = finded + 1;
    }else{
        answer = finded;
    }
    
    
    return answer;
}