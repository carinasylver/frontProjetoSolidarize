
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

const submissaoFormCadastro = document.querySelector('[dados-formularioCadastro')
// console.log(submissaoFormCadastro)
submissaoFormCadastro.addEventListener('submit', (e) => {

  e.preventDefault() 

  const listaRespostas = {
    'nome': e.target.elements['nome'].value,
    'email': e.target.elements['email'].value,
    'senha': e.target.elements['senha'].value,
    'bairro': e.target.elements['bairro'].value,
  }

  localStorage.setItem('cadastro', JSON.stringify(listaRespostas))

  alert('confirme seu cadastro por email')
  window.location.href = './index.html'

})

const submissaoFormLogin = document.querySelector('[dados-formularioLogin')
// console.log(submissaoFormLogin)
submissaoFormLogin.addEventListener('submit', (e) => {


  e.preventDefault() 

  const listaRespostas = {
    'emailLogin': e.target.elements['emailLogin'].value,
    'senhaLogin': e.target.elements['senhaLogin'].value,
  }

  localStorage.setItem('login', JSON.stringify(listaRespostas))

  alert('Bem-vindo(a)!')
  window.location.href = './index.html'

})


