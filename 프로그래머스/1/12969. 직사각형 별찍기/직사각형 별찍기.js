process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const starHorizon = Array.from({length : a}, () => '*').join('');
    
    let answer = '';
    
    for(let i = 0; i < b; i++){
        if(i === 0) {
            answer += starHorizon;
        }else{
            answer += `\n${starHorizon}`;
        }
    } 
    
    console.log(answer)
});