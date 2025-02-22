function solution(answers) {

    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const scores = [0, 0, 0];
    
    for (const [i, answer] of answers.entries()) {
        for (const [j, pattern] of patterns.entries()) {
            if (answer === pattern[i % pattern.length]) {
                scores[j] += 1;
            }
        }
    }
    
    const maxScore = Math.max(...scores);
    
    const highestScores = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            highestScores.push(i + 1);
        }
    }
    
    return highestScores
//     const one = [1, 2, 3, 4, 5];
//     const two = [2, 1, 2, 3, 2, 4, 2, 5];
//     const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
//     let count = {
//         1: 0,
//         2: 0,
//         3: 0
//     };
//     // 패턴 반복계산 할때 아래처럼..
//     answers.forEach((e, i) => {
//         if(e === one[i % one.length]) count['1']++;
//         if(e === two[i % two.length]) count['2']++;
//         if(e === three[i % three.length]) count['3']++;
//     });
    
//     const max = Math.max(...Object.values(count));
        
//     const answer = Object.entries(count)
//     .sort(([, a], [, b]) => a - b)
//     .reduce((acc, [key, value]) => {
//         if(value >= max){
//             acc.push(Number(key));
//             return acc
//         }
//         return acc;
//     }, []);
    
//     return answer
}