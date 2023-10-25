// function gerar(){
//     var qtd = parseInt(document.getElementById("iptQtd").value);
    
//     var spnResp = document.querySelector("#spnResp");
    
//     var msg = "Programação Web 1";


//     var mensagemTela = "";

//     for (let k=0; k<qtd; k++){
//         // mensagemTela = mensagemTela + "["+k+"]" + msg + "<br>"; 
//         mensagemTela = mensagemTela + ` <br> [${k+1}] ${msg}`; 
//     }

//     spnResp.innerHTML = mensagemTela;
    
// }


function gerar(){
    var qtd = parseInt(document.getElementById("iptQtd").value);
    var bttGerar = document.getElementById("bttGerar");

    for (let k=0; k<qtd; k++){
        const spnResp = document.createElement("span");
        spnResp.setAttribute("class","mensagem");
        spnResp.innerHTML = "Programação Web";
        document.querySelector("body").appendChild(spnResp);
    }

    bttGerar.disabled = true;

}

function apagar() {
    var bttGerar = document.getElementById("bttGerar");
    bttGerar.disabled = false;

    var inputQtd = document.getElementById("iptQtd");
    inputQtd.value = "";
}


// Modifique o código para a função "apagar" remover também as mensagens geradas.