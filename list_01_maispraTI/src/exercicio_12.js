const prompt = require('readline-sync').question;

const numero = Number(prompt('Informe um numero: '));

// Imprimindo a tabuada do número
for (let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
}