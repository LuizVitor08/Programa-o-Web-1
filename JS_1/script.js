



function criarmensagem() {

    var inputNome = document.getElementById("iptNome");
    var nome = inputNome.value;

//    alert("Sejam bem-vindos ao Javascript")
   console.log("primeiro java script");


    var spanMensagem = document.getElementById("spnMsg");

    spanMensagem.innerHTML = "Sejam bem vindos ao Javascript"

    spanMensagem.innerHTML = "Oi " + nome + ", seja bem vindo ao Javascrpit.";
}   

function apagarMensagem() {
    var spanMensagem = document.getElementById("spnMsg");
    
    spanMensagem.innerHTML = ""

    var inputNome = document.getElementById("iptNome");
    
    spanMensagem.innerHTML = ""
}