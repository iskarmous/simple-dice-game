function tiraDadi() {

        document.getElementById("dadiCPU").innerHTML = "";
        document.getElementById("dadiPlayer").innerHTML = "";

    
        let risultatiCPU = []
        for (let i = 0; i < 3; i++) {
            let numeroCasuale = Math.floor(Math.random() * 6) + 1;
            risultatiCPU.push(numeroCasuale);
        }

        let risultatiPlayer = []
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


        let punteggioCPU = risultatiCPU.reduce((accumulator, currentValue) => accumulator + currentValue);
        let punteggioPlayer = risultatiPlayer.reduce((accumulator, currentValue) => accumulator + currentValue);

        if (punteggioPlayer > punteggioCPU) {
            esito = "Punto a " + nickname;
            puntiPlayer ++
        }
      
        if (punteggioPlayer < punteggioCPU) {
            esito = "Punto alla CPU";
            puntiCPU ++
        }
      
        if (punteggioPlayer == punteggioCPU) {
            esito = "Pareggio";
        }

        document.getElementById("esito").innerHTML = esito;

        document.getElementById("pointsCPU").innerHTML = puntiCPU;
        document.getElementById("pointsPlayer").innerHTML = puntiPlayer;


    if (puntiCPU == limite) {
        alert("Vince la CPU!");
        location.href = "index.html";
    }
    if (puntiPlayer == limite) {
        alert("Hai vinto!!");
        location.href = "index.html";
    }
}