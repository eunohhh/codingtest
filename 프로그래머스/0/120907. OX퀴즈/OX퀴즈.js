function solution(quiz) {
    const answer = quiz.map((eachQuiz, idx) => { 
        const splited = eachQuiz.split(' ');
        const X = Number(splited[0]);
        const operator = splited[1];
        const Y = Number(splited[2]);
        const Z = Number(splited[splited.length - 1]);
        if(operator === '+'){
            return X + Y === Z ? "O" : "X";
        } else {
           return X - Y === Z ? "O" : "X";
        } 
    });
    return answer;
}