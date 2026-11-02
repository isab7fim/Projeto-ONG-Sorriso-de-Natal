const botoesParticipar = document.querySelectorAll(".botaoparticipacao");

botoesParticipar.forEach(function (botao) {

botao.addEventListener("click", function () {
    const idPainel = botao.getAttribute("aria-controls");
    const painel = document.getElementById(idPainel);

 if (painel) {
    painel.hidden = !painel.hidden;
     botao.setAttribute(
                "aria-expanded",
                String(!painel.hidden)
            );

        }

    });
}
);
