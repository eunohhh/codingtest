function solution(nums) {
    var answer = 0;
    
    function isPrime(num) {
	    if(num === 1) return false; 
        for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
            if(num % i === 0) return false;
        } 
        return true; 
    }
    const n = nums.length;
    
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)){
                    answer ++;
                }
            }
        }
    }

    return answer;
}