function solution(strings, n) {
    var answer = [];
    
    const added = strings.map(e => {
        return e[n] + e;
    });
    
    added.sort();
        
    answer = added.map(e => {
        return e.slice(1, e.length);
    })
        
    return answer;
}