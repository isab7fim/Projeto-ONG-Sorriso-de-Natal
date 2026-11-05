// Seleciona o formulário e a área onde as mensagens aparecem
const formulario = document.getElementById('form');
const mensagemRetorno = document.getElementById('ok');

// Mostra uma mensagem de erro na própria página
function mostrarErro(texto) {
  mensagemRetorno.textContent = texto;
  mensagemRetorno.classList.add('erro');
  mensagemRetorno.classList.add('show');
}

// Mostra a confirmação (simulada) na própria página
function mostrarSucesso(texto) {
  mensagemRetorno.textContent = texto;
  mensagemRetorno.classList.remove('erro');
  mensagemRetorno.classList.add('show');
}

// Função executada quando o formulário é enviado
function validarFormulario(evento) {
  // Impede o envio e o recarregamento padrão da página
  evento.preventDefault();

  // Lê os valores dos campos e remove espaços desnecessários
  const nome = document.getElementById('nome').value.trim();
  const campoEmail = document.getElementById('email');
  const email = campoEmail.value.trim();
  const assunto = document.getElementById('assunto').value.trim();
  const mensagem = document.getElementById('msg').value.trim();

  // Verifica um campo de cada vez e mostra o primeiro erro encontrado
  if (nome.length < 3) {
    mostrarErro('Digite um nome com pelo menos 3 caracteres.');
  } else if (email === '') {
    mostrarErro('Digite seu e-mail.');
  } else if (!campoEmail.checkValidity()) {
    mostrarErro('Digite um e-mail em formato válido, como nome@email.com.');
  } else if (assunto === '') {
    mostrarErro('Escolha um assunto.');
  } else if (mensagem.length < 10) {
    mostrarErro('A mensagem precisa ter pelo menos 10 caracteres.');
  } else {
    // Tudo certo: confirmação simulada, nada é enviado de verdade
    mostrarSucesso('Confirmação simulada: seus dados foram validados, mas nenhuma mensagem foi enviada e nenhum dado foi coletado.');
    formulario.reset();
  }
}

// Registra o evento de envio do formulário
formulario.addEventListener('submit', validarFormulario);