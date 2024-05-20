function solution(arr1, arr2) {
    
    const mapped = arr1.map((e, i) => {
        const inner = e.map((item, idx) => {
            return item + arr2[i][idx]
        })
        return inner;
    })
        
    return mapped;
}