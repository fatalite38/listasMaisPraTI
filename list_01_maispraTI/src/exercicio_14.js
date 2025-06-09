const prompt = require('readline-sync').question;

const numero = Number(prompt('Informe um numero: '));

// Calculando o fatorial
let fatorial = 1;
for (let i = numero; i >= 1; i--) {
    fatorial = fatorial * i;
}
console.log(`O fatorial de ${numero} é: ${fatorial}`);