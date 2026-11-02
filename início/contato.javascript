(function(){
  var form=document.getElementById('form');
  var ok=document.getElementById('ok');
  var btn=document.getElementById('enviar');
  function enviar(e){
    if(e) e.preventDefault();
    var nome=form.nome.value.trim();
    var contato=form.email.value.trim()||form.zap.value.trim();
    ok.classList.remove('erro');
    if(!nome||!contato){
      ok.textContent='Preencha seu nome e pelo menos um contato (e-mail ou WhatsApp).';
      ok.classList.add('erro');
    }else{
      ok.textContent='Mensagem enviada! Entraremos em contato em breve. 🎁';
      form.reset();
    }
    ok.classList.add('show');
    ok.scrollIntoView({behavior:'smooth',block:'center'});
  }
  btn.addEventListener('click',enviar);
  form.addEventListener('submit',enviar);
})();
