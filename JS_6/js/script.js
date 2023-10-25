
function gerar(){
    var qtd = parseInt(document.getElementById("iptQtd").value);
    var bttGerar = document.getElementById("bttGerar");
    const divContainerMsgs = document.createElement("div");
    divContainerMsgs.setAttribute("id","divContainerMsgs");

    for (let k=0; k<qtd; k++){
        const spnResp = document.createElement("span");
        spnResp.setAttribute("class","mensagem");
        spnResp.innerHTML = "Programação Web";
        //document.querySelector("body").appendChild(spnResp);
        divContainerMsgs.appendChild(spnResp);
        
    }

    bttGerar.disabled = true;
    bttApagar.disabled = false;

    // Criar botão
    const bttTeste = document.createElement("button");
    bttTeste.setAttribute("type","button");
    bttTeste.setAttribute("class","bttTeste");
    bttTeste.innerHTML = "Teste";

    bttTeste.addEventListener("mouseover",exibirMsgMouseOver);
    bttTeste.addEventListener("mouseout",exibirMsgMouseOut);

    divContainerMsgs.appendChild(bttTeste);

    document.querySelector("body").appendChild(divContainerMsgs);
}

function exibirMsgMouseOver() {
    var spnMsg = document.createElement("span");
    spnMsg.setAttribute("class", "msgMouseOver");
    spnMsg.textContent = "Evento MouseOver";

    document.querySelector("#divContainerMsgs").appendChild(spnMsg);
}

function exibirMsgMouseOut(){
    var spnMsg = document.createElement("span");
    spnMsg.setAttribute("class", "msgMouseOut");
    spnMsg.textContent = "Evento MouseOut";

    document.querySelector("#divContainerMsgs").appendChild(spnMsg);
}

function apagar() {
    var bttGerar = document.getElementById("bttGerar");
  
    document.getElementById("iptQtd").value = "";

    document.getElementById("divContainerMsgs").remove();
}


