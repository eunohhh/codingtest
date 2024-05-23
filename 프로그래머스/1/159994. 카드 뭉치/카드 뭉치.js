function solution(cards1, cards2, goal) {
    var answer = '';
    
    let temp = [];
    
    goal.forEach((e, i) => {
        let one, two
        if(e === cards1[0]) one = cards1.shift();
        if(e === cards2[0]) two = cards2.shift();
        const found1 = one === e ? e : null;
        const found2 = two === e ? e : null;
        if(found1) temp.push(found1);
        if(found2) temp.push(found2);
    })
    
    console.lo
        
    const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    
    isEqual(temp, goal) ? answer = "Yes" : answer = "No"
    
    return answer;
}