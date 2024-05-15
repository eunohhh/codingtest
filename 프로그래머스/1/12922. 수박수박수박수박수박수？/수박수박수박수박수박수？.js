function solution(n) {
    let arr = [];
    
    for(let i = 0; i < n; i++){
        if(i !== 0 && arr[i - 1] === '수'){
            arr.push('박');
        }else if(i !== 0 && arr[i -1] === '박'){
            arr.push('수');
        }else{
            arr.push('수');
        }
    }
    
    const answer = arr.join('');
    
    return answer;
}