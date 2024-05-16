function solution(food) {    
    
    let arr = [];
    
    for(let idx = 0; idx < food.length; idx++){
        if(idx > 0){
            if(food[idx] !== 1){
                for(let i = 0; i < Math.floor(food[idx] / 2); i++){
                    arr.push(idx)
                } 
            }
        }
    }
        
    const reversed = [...arr].reverse();
    arr = [...arr, 0];
    const merged = arr.concat(reversed);
    
    const answer = merged.join('');
    
    return answer    
}