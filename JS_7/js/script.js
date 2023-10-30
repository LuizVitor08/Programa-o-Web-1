function loadDefault(){
    const bttOper = document.createElement("button");
    bttOper.textContent = "Gerar";
    bttOper.setAttribute("type","button");
    bttOper.setAttribute("id","bttOperacao");
    bttOper.addEventListener("click",gerar);

    document.querySelector("body").appendChild(bttOper);
}

function gerar(){
    var qtd = parseInt(document.getElementById("iptQtd").value);
    
    const divContainerMsgs = document.createElement("div");
    divContainerMsgs.setAttribute("id","divContainerMsgs");

    for (let k=0; k<qtd; k++){
        const spnResp = document.createElement("span");
        spnResp.setAttribute("class","mensagem");
        spnResp.innerHTML = "Programação Web";
        // document.querySelector("body").appendChild(spnResp);
        divContainerMsgs.appendChild(spnResp);
    }

    document.querySelector("body").appendChild(divContainerMsgs);

    mudarBotao();

}

function apagar(){
    document.getElementById("iptQtd").value = "";
    document.getElementById("divContainerMsgs").remove();

    mudarBotao();
}

function mudarBotao(){
    bttOper = document.getElementById("bttOperacao");

    if (bttOper.textContent == "Gerar"){
        bttOper.removeEventListener("click",gerar);
        bttOper.textContent = "Apagar";
        bttOper.addEventListener("click",apagar);
    }else if (bttOper.textContent == "Apagar"){
        bttOper.removeEventListener("click",apagar);
        bttOper.textContent = "Gerar";
        bttOper.addEventListener("click",gerar);
    }

}