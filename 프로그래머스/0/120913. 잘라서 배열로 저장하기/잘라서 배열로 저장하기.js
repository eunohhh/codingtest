function solution(my_str, n) {
    let before = 0;
    let after = n;
    const strArray = [...my_str];
    let answer = [];
    let temp = '';

    strArray.forEach((str, idx) => {
        if(idx >= before && idx < after){
            temp += str;
        }
        if(idx === after){
            answer.push(temp);
            temp = '';
            before = after;
            after = after + n;
            temp += str;
        }
        if(idx === strArray.length - 1){
            answer.push(temp);
        }
    })
    return answer;
}