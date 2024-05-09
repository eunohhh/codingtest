function solution(t, p) {
    var answer = 0;
    let arr = [];
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        const sub = t.substr(i, p.length);
        arr.push(sub);
    }

    arr.forEach(e => {
        if(Number(e) <= Number(p)) answer++;
    })
    
    return answer;
}