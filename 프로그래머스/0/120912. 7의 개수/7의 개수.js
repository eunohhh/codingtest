function solution(array) {  
    const reduced = array.reduce((acc, cur) => {
        const numberToString = [...String(cur)];
        const filtered = numberToString.filter((num) => num === '7');
        return acc += filtered.length;
    },0);
    
    return reduced
}