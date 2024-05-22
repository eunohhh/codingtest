function solution(a, b, n) {
    let count = 0;
    // 애초에 가진병이 필요한 병보다 적으면 리턴
    if (n < a) return 0;

    // 가진병이 필요한 병보다 적어질 때까지
    while (n >= a) {
        // 현재 받을 수 있는 병수 구하기
        const get = Math.floor(n / a) * b;
        // 받을 수 있는 병 수를 제외하고 나머지 값 구하기
        // 이 값은 0 일 수도 있음
        const minus = n % a;

        // 받은 병 수 count 변수에 더하기
        count += get;
        // 과정을 끝내고 수중에 남은 병 수
        // 얻은것, 남은 것
        n = get + minus;
    }

    return count;
}
