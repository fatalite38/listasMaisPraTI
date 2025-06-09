// Função de memória para evitar chamadas excessivas de uma função.
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const chave = JSON.stringify(args); // converte os argumentos em uma string

    if (cache.has(chave)) {
      return cache.get(chave); // retorna o resultado do cache
    }

    const resultado = fn(...args);
    cache.set(chave, resultado); // armazena o resultado no cache
    return resultado;
  };
}

function soma(a, b) {
  console.log("Calculando...");
  return a * b;
}

const somaMemo = memoize(soma);

// Testes
console.log(somaMemo(3, 5));
console.log(somaMemo(3, 5)); 
console.log(somaMemo(4, 8));
console.log(somaMemo(4, 8)); 
