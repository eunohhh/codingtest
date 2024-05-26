function solution(s) {
    var answer = '';
    
    let arr = [];
    if(s.indexOf('') !== -1){
        const splited = s.split(' ');
        arr = splited;
    }else{
        arr = [s];
    }
    
    const mapped = arr.map(e => {
        const arr = e.split('');
        const innerMapped = arr.map((a,i) => {
            if(i % 2 === 0){
                return a.toUpperCase();
            }else{
                return a.toLowerCase();
            }
        });
        return innerMapped.join('');
    });
    
    answer = mapped.join(' ');
    
    return answer;
}