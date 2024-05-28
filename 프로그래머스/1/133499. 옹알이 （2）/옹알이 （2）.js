function solution(babbling) {
    let answer = 0;
    const validSounds = ["aya", "ye", "woo", "ma"];

    // 각 단어를 순회하면서 검사합니다.
    babbling.forEach((word, i) => {
        let isValid = true;
        let previousSound = "";

        // 가능한 발음들로 단어를 분할하고 확인합니다.
        while (word.length > 0 && isValid) {
            let found = false;
            // while 문 안에서 유효한 발음 수 만큼 반복
            for (const sound of validSounds) {
                // 주어진 발음이 유효한 발음으로 시작할 경우
                if (word.startsWith(sound)) {
                    // 할 수 있는 이전 발음(저장해 둔 값) 과 주어진 발음이 같으면
                    // 연속된 발음이므로 할 수 없음 > 탈출
                    if (previousSound === sound) {
                        isValid = false;
                        break;
                    }
                    // 연속된 발음이 아니라면 현재 단어에서 유효한 발음을 제거
                    // 유효한 발음으로 시작했고 체크 했으므로 그만큼 slice
                    word = word.slice(sound.length);
                    // 현재 발음을 이전 발음으로 저장
                    previousSound = sound;
                    // 유효한 발음을 찾았음을 표시하고 루프 탈출(찾으면 바로 탈출)
                    found = true;
                    break;
                }
            }
            // 찾지 못했다면 isValid false 로 만들어 while 문 탈출
            if (!found) isValid = false;
        }
        // while 과 for 를 다 돌았는데도 isValid 가 true 면 answer 증가
        if (isValid) answer++;
    });

    return answer;
}