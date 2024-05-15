function solution(a, b) {
    
    const reduced = a.reduce((acc, curr, i) => {
       
        const multiply = curr * b[i];
        
        return acc + multiply;
        
    },0)
        
    return reduced;
}