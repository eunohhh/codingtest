function solution(number, limit, power) {

    const getArmor = (num) => {
        let index = 1;
        let result = [];
        
        for(let i = 1 ; i <= Math.sqrt(num) ; i++){
            if(num % i === 0) {
                result.push(i);
                if(num / i !== i) result.push(num / i);
            }
        }
        return result.length;
    }
    
    const knights = Array.from({length: number}, (_, i) => i + 1);
    
    const allPowers = knights.map((e, i) => {
        const attackPower = getArmor(e);        
        return attackPower > limit ? power : attackPower;
    });
        
    const sum = allPowers.reduce((acc, cur) => acc + cur, 0);
    
    return sum    
}