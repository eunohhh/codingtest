function solution(A, B) {
    
    const array = A.split('');
    
    let count = 0;
    for(let i = 0; i < array.length; i++){
        const popped = array.pop();
        array.unshift(popped);
        const final = array.join('');
        count ++;
        if(final === B) {
            break;
        };
    }
    
    if(A === B){
        return 0;
    }else if(count > 0 && count < A.length){
        return count;
    }else if(count === A.length){
        return -1;
    }
}