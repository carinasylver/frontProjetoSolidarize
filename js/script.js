
const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", evento => evento.preventDefault());    
})


const tiposDeErro = [
  'valueMissing',  
  'typeMismatch',  
  'patternMismatch',
  'tooShort',  
]

const mensagens = {
  nome: {
      valueMissing: "Insira seu nome",
      patternMismatch: "informe um nome válido.",
      tooShort: "informe um nome válido."
  },
  email: {
      valueMissing: "Insira seu e-mail",
      typeMismatch: "informe um email válido.",
      tooShort: "informe um e-mail válido."
  },
  senha: {
      valueMissing: "Insira uma senha com 6 ou mais caracteres",
      typeMismatch: "a senha deve conter 6 ou mais caracteres",
      tooShort: "a senha deve conter 6 ou mais caracteres"
  },
  bairro: {
      valueMissing: "Selecione seu bairro",
  }

}


function verificaCampo(campo) {
  let mensagem = ''
  campo.setCustomValidity('')  
  console.log(campo.validity)

  
  tiposDeErro.forEach(erro => {
      if (campo.validity[erro]) {
          mensagem = mensagens[campo.name][erro];
          console.log(mensagem);
      }
  });

    
  const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
 
  const validadorDeInput = campo.checkValidity()  
  console.log(validadorDeInput)

    
  if (mensagemErro) {
      if(!validadorDeInput){
          mensagemErro.textContent = mensagem
      }else{
          mensagemErro.textContent = ''
      }
  } 
}

const submissaoFormulario = document.querySelector('[dados-formulario')
submissaoFormulario.addEventListener('submit', (e) => {

  e.preventDefault() 
  alert('confirme seu cadastro por email')
  window.location.href = './index.html'

})