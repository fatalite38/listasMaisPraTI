const prompt = require('readline-sync').question;

const valor1 = Number(prompt('Informe o primeiro valor: '));
const valor2 = Number(prompt('Informe o segundo valor: '));

// Verificando os valores e informando a ordem crescente.
if (valor1 < valor2) {
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
} else if (valor1 > valor2) {
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
}else {
    console.log('Os valores não podem ser iguais.');
}