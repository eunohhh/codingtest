function solution(lottos, win_nums) {
    // 일단 얼마나 일치하는지 / 안일치하는 애들만 뽑기
    const fail = lottos.filter((e) => !win_nums.includes(e));
    const check = lottos.filter((e) => win_nums.includes(e));
    const zero = lottos.filter((e) => e === 0);
    
    const high = check.length + zero.length;
    const low = check.length
    
    if(zero.length <= 1 && check.length === 0) return [ 6, 6 ]
    
    let max, min = 0;
    Array.from({length: 6}, (_,i) => i + 1).forEach((e, i) => {
        if(e === high) max = 6 - i;
        if(e === low) min = 6 - i;    
    })
    
    // 다 일치하면 걍 1등
    if(check.length === 6) return [ 1, 1 ];
    // 다 0(지워졌으면) 걍 1, 6등
    if(zero.length === 6) return [ 1, 6 ];
    
    return [max, min] 
}