// Seleciona todos os botões "Como participar" da página
const botoes = document.querySelectorAll('.botaoparticipacao');

// Função que mostra ou oculta o painel ligado ao botão clicado
function alternarPainel(evento) {
  const botao = evento.currentTarget;
  const painel = document.getElementById(botao.getAttribute('aria-controls'));

  if (painel) {
    if (painel.hidden) {
      painel.hidden = false;
      botao.textContent = 'FECHAR';
      botao.setAttribute('aria-expanded', 'true');
    } else {
      painel.hidden = true;
      botao.textContent = 'COMO PARTICIPAR';
      botao.setAttribute('aria-expanded', 'false');
    }
  }
}

// Registra o evento de clique em cada botão
botoes.forEach(function (botao) {
  botao.addEventListener('click', alternarPainel);
});