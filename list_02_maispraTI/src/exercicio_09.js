// Função para converter um array em um objeto
function paresParaObjeto(pares) {
  const obj = {};

  for (let i = 0; i < pares.length; i++) { //
    const [chave, valor] = pares[i]; 
    obj[chave] = valor; // adiciona o par ao objeto
  }

  return obj;
}

// Funcção para converter um objeto em um array
function objetoParaPares(obj) {
  const pares = [];

  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) { 
      pares.push([chave, obj[chave]]); // adiciona o par ao array
    }
  }

  return pares;
}

// Testes
const pares = [["nome", "Luiz Fernando"], ["idade", 25]];
const obj = paresParaObjeto(pares);
console.log(obj);

const novoArray = objetoParaPares(obj);
console.log(novoArray);
