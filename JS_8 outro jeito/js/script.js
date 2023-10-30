    
    
    
    var numeroSorteado;
    
    
    function loadDefault(){
        const bttGerar = document.createElement("button");
        bttGerar.setAttribute("type","button");
        bttGerar.setAttribute("id","bttInicio");
        bttGerar.addEventListener("click",iniciarJogo);
        bttGerar.textContent = "Iniciar Jogo";

        document.querySelector("body").appendChild(bttGerar);
    }

    function iniciarJogo(){

    const qtdBlocos = parseInt(document.getElementById("iptQtd").value);
    

        // Gerar o numero sorteado
        for (let k=0; k<20; k++){
            numeroSorteado =  Math.floor(Math.random() * qtdBlocos);

            console.log(numeroSorteado);

        
        //Criar o container para os blocos
        const contaniner = document.createElement("div");
        contaniner.setAttribute("id","container");

        // Gerar os blocos
        for (let k=0; k<qtdBlocos; k++){
            var blocos = document.createElement("div");
            blocos.setAttribute("class","box");
            container.appendChild(blocos);

        }

        Document.querySelector("body").appendChild(container);
        }

    }