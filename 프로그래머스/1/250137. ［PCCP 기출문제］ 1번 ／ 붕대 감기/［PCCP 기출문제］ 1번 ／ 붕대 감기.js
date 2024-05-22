function solution(bandage, health, attacks) {    
    const t = bandage[0];
    const x = bandage[1];
    const y = bandage[2];

    let currHealth = health;
    let curAttack = 0;

    for ( const e of attacks ){
        const attackTime = e[0];
        const damage = e[1];

        const timeDiff = attackTime - curAttack - 1;

        const success = Math.floor(timeDiff / t);

        let get = timeDiff * x + success * y;
        
        currHealth += get;
        if(currHealth >= health) currHealth = health;
        currHealth -= damage;

        curAttack = attackTime;

        if(currHealth <= 0){
            return currHealth = -1;
        }
    };

    return currHealth;
}