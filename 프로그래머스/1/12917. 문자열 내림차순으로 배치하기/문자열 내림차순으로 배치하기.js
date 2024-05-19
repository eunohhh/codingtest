function solution(s) {
    
    const arr = [...s];
    arr.sort((a, b) => {
        const x = a.toUpperCase();
        const y = b.toUpperCase();
        
        if(a === x || b === y) {
            if(a > b) return -1;
            if(a < b) return 1;
            if(a === b) return 0;
        }else{
            if(a > b) return -1;
            if(a < b) return 1;
            if(a === b) return 0;   
        }
        
    })
    
    return arr.join('');    
}