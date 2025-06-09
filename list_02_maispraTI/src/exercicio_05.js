// Função para vitar chamadas excessivas de uma função.
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // limpa a chamada anterior
    timeoutId = setTimeout(() => {
      fn(...args); // chama a função original após o delay
    }, delay);
  };
}

// Exemplo de uso da função
function salvarBusca(texto) {
  console.log(`Salvando busca: ${texto}`);
}
// Aplicando o debounce ao salvarBusca
const buscaDebounce = debounce(salvarBusca, 1000);

// Simulando digitação
buscaDebounce("T");
buscaDebounce("Tri");
buscaDebounce("Trico");
buscaDebounce("Tricolor");