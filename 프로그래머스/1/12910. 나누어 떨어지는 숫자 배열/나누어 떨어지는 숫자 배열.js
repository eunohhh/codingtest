function solution(arr, divisor) {
    var answer = [];
    
    let result = arr.reduce((acc, curr) => {
        if(curr % divisor === 0){
            return [curr, ...acc];
        }else{
            return [...acc];
        }
    },[]);
    
    const setted = Array.from(new Set(result));
        
    setted.sort((a, b) => a - b);
        
    setted.length === 0 ? answer = [-1] : answer = setted; 
    
    return answer;
}