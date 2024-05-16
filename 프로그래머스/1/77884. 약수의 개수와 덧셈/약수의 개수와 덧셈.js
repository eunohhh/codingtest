function solution(left, right) {
    
    const getMeasure = (num) => {
        let result = []
        let index = 1;
        while (index <= num / 2) {
          if (num % index === 0) result.push(index);
          index++;
        }
        result = [...result, num];
        return result;
    }
    
    const allNum = Array.from({length: (right - left) + 1}, (_, i) => i + left);
        
    const reduced = allNum.reduce((acc, curr, i) => {
        const length = getMeasure(curr).length;
        
        if(length % 2 === 0){
            return acc + curr;
        }else{
            return acc - curr;
        }
    }, 0)
    
    return reduced;
}