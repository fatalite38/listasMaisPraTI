const prompt = require('readline-sync').question;

let soma = 0;

// Solicitando 5 números ao usuário
for (let i = 1; i <= 5; i++) {
  const numero = Number(prompt(`Informe o ${i} numero: `));
  // Somando os números
  soma += numero;
}

console.log(`A soma dos 5 números informados é: ${soma}`);