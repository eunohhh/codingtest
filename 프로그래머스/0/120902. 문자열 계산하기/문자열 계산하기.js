function solution(my_string) {
    const splited = my_string.split(' ');
    
    let answer = 0;
    for(let i = 0; i < splited.length; i++) {
        if(i === 0) {
            answer = Number(splited[i]);
        } else if(splited[i] === '+') {
            answer += Number(splited[i + 1]);
        } else if(splited[i] === '-') {
            answer -= Number(splited[i + 1]);
        }
    }
    return answer
}