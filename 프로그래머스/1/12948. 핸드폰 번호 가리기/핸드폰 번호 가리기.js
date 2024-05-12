function solution(phone_number) {
    var answer = '';
    
    const sliced = phone_number.slice(0,phone_number.length -4);
    
    let asters = '';
    
    for(let i = 0; i < sliced.length; i++){
        asters += '*';
    }

    answer = phone_number.replace(sliced, asters);
    
    return answer;
}