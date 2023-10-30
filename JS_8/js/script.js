var numeroSorteado = Math.floor(Math.random() * 10) + 1;

function verificarNumero(numero) {
    var mensagemSpan = document.getElementById("mensagem");


    if (numero === numeroSorteado) {
        mensagemSpan.textContent = "Parabéns! Você acertou o número sorteado: " + numeroSorteado;
    } else {
        mensagemSpan.textContent = "Número errado! Tente novamente.";
        document.getElementById(numero).style.display = "none";
    }
}