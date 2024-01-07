let risultatiCPU = [];
let risultatiPlayer = [];

function getDice() {
    
    document.getElementById("dadiCPU").innerHTML = "";
    document.getElementById("dadiPlayer").innerHTML = "";

    risultatiCPU = []
    for (let i = 0; i < 3; i++) {
        let numeroCasuale = Math.floor(Math.random() * 6) + 1;
        risultatiCPU.push(numeroCasuale);
    }

    risultatiPlayer = []
    for (let i = 0; i < 3; i++) {
        let numeroCasuale = Math.floor(Math.random() * 6) + 1;
        risultatiPlayer.push(numeroCasuale);
    }

    risultatiCPU.forEach(function(numero) {
        let diceImg = document.createElement('img');
        diceImg.classList.add('dice');
        diceImg.src = 'img/dice' + numero + '.png';
        document.getElementById('dadiCPU').appendChild(diceImg);
    });

    risultatiPlayer.forEach(function(numero) {
        let diceImg = document.createElement('img');
        diceImg.classList.add('dice');
        diceImg.src = 'img/dice' + numero + '.png';
        document.getElementById('dadiPlayer').appendChild(diceImg);
    });

}



function shuffleAnimation() {

    let button = document.getElementById("game_button");
    button.innerHTML = "In corso...";
    button.disabled = true;
    
    const animation = setInterval(() => {getDice();}, 75);
    setTimeout(() => clearInterval(animation), 1500);

    setTimeout(() => rollDice(), 1500);
    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = "Lancia i dadi!";
    }, 2500);

}



function rollDice() {

    getDice();
    setTimeout(() => calculateEnd(), 500);

}



function calculateEnd() {
    
    let punteggioCPU = risultatiCPU.reduce((accumulator, currentValue) => accumulator + currentValue);
    let punteggioPlayer = risultatiPlayer.reduce((accumulator, currentValue) => accumulator + currentValue);

    if (punteggioPlayer > punteggioCPU) {
        puntiPlayer ++
    }
      
    if (punteggioPlayer < punteggioCPU) {
        puntiCPU ++
    }


    document.getElementById("pointsCPU").innerHTML = puntiCPU;
    document.getElementById("pointsPlayer").innerHTML = puntiPlayer;

    setTimeout(() => {
        if (puntiCPU == limite) {
            alert("Vince la CPU!");
            location.href = "index.html";
        }
        if (puntiPlayer == limite) {
            alert("Hai vinto!!");
            location.href = "index.html";
        }
    }, 1000);

}