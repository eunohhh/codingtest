function solution(my_string) {
    const lowerCased = my_string.toLowerCase().split('');
    lowerCased.sort();
    const answer = lowerCased.join('');
    return answer;
}