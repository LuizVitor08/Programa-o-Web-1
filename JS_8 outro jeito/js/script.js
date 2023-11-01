var numerosSorteados = [];

function loadDefault() {
    const bttGerar = document.createElement("button");
    bttGerar.setAttribute("type", "button");
    bttGerar.setAttribute("id", "bttInicio");
    bttGerar.addEventListener("click", iniciarJogo);
    bttGerar.textContent = "Iniciar Jogo";

    const bttReiniciar = document.createElement("button");
    bttReiniciar.setAttribute("type", "button");
    bttReiniciar.setAttribute("id", "bttReiniciar");
    bttReiniciar.addEventListener("click", reiniciarJogo);
    bttReiniciar.textContent = "Reiniciar Jogo";

    document.querySelector("body").appendChild(bttGerar);
    document.querySelector("body").appendChild(bttReiniciar);
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciarJogo() {
    const qtdBlocos = parseInt(document.getElementById("iptQtd").value);
    const container = document.createElement("div");
    container.setAttribute("id", "container");

    numerosSorteados = [];
    
    const mensagemAntiga = document.getElementById("msg");
    if (mensagemAntiga) {
        mensagemAntiga.remove();
    }

    for (let k = 0; k < qtdBlocos; k++) {
        let numeroAleatorio;
        do {
            numeroAleatorio = gerarNumeroAleatorio(1, 10);
        } while (numerosSorteados.includes(numeroAleatorio));

        numerosSorteados.push(numeroAleatorio);

        var bloco = document.createElement("div");
        bloco.setAttribute("class", "box");
        bloco.textContent = numeroAleatorio;
        bloco.addEventListener("click", function() {
            verificarAcerto(numeroAleatorio);
        });
        container.appendChild(bloco);
    }

    document.querySelector("body").appendChild(container);
}

function verificarAcerto(numeroClicado) {
    const mensagem = document.createElement("span");
    mensagem.setAttribute("id", "msg");

    const numeroSorteado = numerosSorteados[numerosSorteados.length - 1];
    
    if (numeroClicado === numeroSorteado) {
        mensagem.textContent = "Você acertou!";
        mensagem.style.color = "green"; 
    } else {
        mensagem.textContent = "Você errou. O número sorteado era: " + numeroSorteado;
        mensagem.style.color = "red"; 
    }
    
    document.querySelector("body").appendChild(mensagem);
}

function reiniciarJogo() {
    const container = document.getElementById("container");
    if (container) {
        container.remove();
    }
    
    iniciarJogo();
}

d