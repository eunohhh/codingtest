function solution(n) {
    
    const three = n.toString(3);
    const reversed = three.split('').reverse().join('');
    const ten = parseInt(reversed, 3)
    
    return ten;
}