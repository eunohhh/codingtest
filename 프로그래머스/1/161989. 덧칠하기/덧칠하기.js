function solution(n, m, section) {
//     if(section.length === 1) return 1;
    
//     const area = section[section.length - 1] - section[0] + 1;
//     let count = 1; 
//     let remain = area - m;
//     let temp = true;
    
//     if(remain < m && remain > 0){
//         count++;
//     }else if(remain < 0){
//         return count;
//     }else{
//         while(temp){
//             remain = remain - m;
//             count++;
//             if(remain < m) temp = false;
//         }
//     }
        
//     return count;
    let answer = 0;
    let painted = 0;
    for(const sec of section) {
        if(painted < sec) {
            answer++;
            painted = sec+m-1;
        }
    }
    return answer;
}