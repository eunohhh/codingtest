function solution(n, m, section) {
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