function solution(number) {
    var answer = 0;
    for(let i = 0; i < number.length; i++){
        for(let j = 0; j < number.length; j++){
            for(let a = 0; a < number.length; a++){
                if(i !== j && i !== a && j !== a){
                    if(number[i] + number[j] + number[a] === 0) answer++;
                }
            }
            
        }
    }  
    
    return answer / 6;
}