// Seleciona todos os botões "Como participar" da página
const botoes = document.querySelectorAll('.botaoparticipacao');

// Função que mostra ou oculta o painel ligado ao botão clicado
function alternarPainel(evento) {
  // O botão que recebeu o clique
  const botao = evento.currentTarget;

  // O painel que esse botão controla (o id está no atributo aria-controls)
  const painel = document.getElementById(botao.getAttribute('aria-controls'));

  if (painel.hidden) {
    // Estava escondido: mostra e muda o texto do botão
    painel.hidden = false;
    botao.textContent = 'FECHAR';
    botao.setAttribute('aria-expanded', 'true');
  } else {
    // Estava visível: esconde e volta o texto original
    painel.hidden = true;
    botao.textContent = 'COMO PARTICIPAR';
    botao.setAttribute('aria-expanded', 'false');
  }
}

// Registra o evento de clique em cada botão
botoes.forEach(function (botao) {
  botao.addEventListener('click', alternarPainel);
});