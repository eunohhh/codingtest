function solution(babbling) {
    let answer = 0;
    
    const validSounds = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(word => {
        let isValid = true;
        let usedSounds = {};

        for (let sound of validSounds) {
            if (word.includes(sound)) {
                const idx = word.indexOf(sound);
                if (usedSounds[sound] || idx !== word.lastIndexOf(sound)) {
                    isValid = false;
                    return; 
                }

                word = word.replace(sound, " ");
                usedSounds[sound] = true;
            }
        }

        if (isValid && !word.trim().length) {
            answer++;
        }
    });
    
    return answer;
}