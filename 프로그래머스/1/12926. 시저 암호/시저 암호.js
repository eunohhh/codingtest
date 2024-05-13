function solution(s, n) {
    
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const isAllLowerCase = (str) => {
        if(str === ' '){
            return null;
        }else if(str === str.toLowerCase()){
            return true;
        }else if(str === str.toUpperCase()){
            return false;
        }
    }
    
    const sMapped = s.split('').map(e => isAllLowerCase(e));
    
    const getIndex = (param, i) => {
        const addedIndex = param.indexOf(s[i]) + n;
        let index;
        
        if(addedIndex >= lower.length) {
            index = addedIndex - lower.length;
        }else{
            index = addedIndex;
        }
        return index;
    }
                    
    const ceaser = sMapped.map((e, i) => {                
        if(e === true){
            const index = getIndex(lower, i);
            return lower[index];
        }else if(e === false){
            const index = getIndex(upper, i);
            return upper[index];
        }else{
            return ' ';
        }
    })
    
    const answer = ceaser.join('');
    return answer;
}