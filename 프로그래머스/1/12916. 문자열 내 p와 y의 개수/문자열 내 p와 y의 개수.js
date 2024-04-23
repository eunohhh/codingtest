function solution(s){
    let answer;
    const lowerCase = s.toLowerCase().split('');
        
    let p = 0;
    let y = 0;
    
    lowerCase.forEach(e => {
        if(e === 'p'){
            p++;
        }else if(e === 'y'){
            y++;
        }
    })
    
    if(p === y){
        answer = true;
    }else if(p !== y){
        answer = false;
    }else{
        answer = true;
    }
    
    return answer;
}