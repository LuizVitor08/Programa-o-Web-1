function verificarIdade() {
    var idade = document.getElementById("idade").value;
    var mensagem = document.getElementById("mensagem");

    if (idade >= 18) {
        mensagem.innerHTML = "Você pode votar e dirigir!";
        
    } else if (idade >= 17) {
        mensagem.innerHTML = "Você pode votar, mas não pode dirigir."; 
        
    } else {
        mensagem.innerHTML = "Você não pode votar nem dirigir.";

    }
}

