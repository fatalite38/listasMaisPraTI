const prompt = require('readline-sync').question; // Importando a biblioteca readline-sync

const numero = Number(prompt('Informe um numero: ')); // Recebendo um número do usuário

// Verificando se o número é par ou impar
if (number % 2 === 0) {
    console.log(`${numero} é um número par.`);
}else if (number % 2 === 1) {
    console.log(`${numero} é um número impar.`);
}else {
    console.log('Informação inválida.');
}