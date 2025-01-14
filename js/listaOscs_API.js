
let oscs = []
const endpointDaAPI = 'https://carinasylver.github.io/oscsPelotas_api/oscsPelotas.json'
// console.log(endpointDaAPI)

getBuscaOscsDaAPI()


async function getBuscaOscsDaAPI(){  
    const resposta = await fetch(endpointDaAPI) 
    oscs = await resposta.json()
    // console.log(oscs)
    // console.table(oscs)
    
    exibirOscs(oscs)      

}


const elementoParaInserirOscs = document.querySelector('.tabela__celula')
// console.log(elementoParaInserirOscs)

function exibirOscs(listaDeOscs) {
    elementoParaInserirOscs.innerHTML = '';
    listaDeOscs.forEach(osc => { 
    elementoParaInserirOscs.innerHTML += `           
      <li class="tabela__celula-item">${osc.nome}</li>
      <li class="tabela__celula-item">${osc.naturezaJuridica}</li>
      <li class="tabela__celula-item">${osc.endereco}</li>                 
    `; 
            
    });     
}


  