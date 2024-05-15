function solution(numbers) {
    let arr = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(i !== j){
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    
    const setted = Array.from(new Set(arr));
    
    setted.sort((a, b) => a - b);
    
    // console.log(setted)
    
    return setted;
}