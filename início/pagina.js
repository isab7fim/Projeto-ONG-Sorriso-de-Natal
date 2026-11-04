const botaoInformacao = document.getElementById("botao-informacao");
const informacaoOng = document.getElementById("informacao-ong");

function alternarInformacao(){

    if (informacaoOng.hidden == true){

        informacaoOng.hidden = false;

        botaoInformacao.textContent = "Ocultar informações";
    }
    
    else{

        informacaoOng.hidden = true;

        botaoInformacao.textContent = "Conheça nossa iniciativa";
    }
}

botaoInformacao.addEventListener("click", alternarInformacao);
