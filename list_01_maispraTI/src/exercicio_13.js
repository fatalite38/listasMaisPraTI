const prompt = require('readline-sync').question;

// Informando ao usuário
console.log('--------------------');
console.log('SOMA DE NUMEROS DECIMAIS');
console.log('Digite 0 para parar.');
console.log('--------------------');


let numero = Number(prompt('Digite um numero decimal: '));

// Declarando as variáveis
let soma = 0;
let cont = 0;

while (numero !== 0) { //enquanto o numero for diferente de zero
    soma += numero; //soma = soma + numero
    cont++; //cont = cont + 1
    numero = Number(prompt('Digite um numero decimal: '));
}

if (cont > 0) {
    const media = soma / cont;
    console.log(`A media dos numeros informados eh: ${media.toFixed(2)}`);
} else{
    console.log('Nenhum numero valido foi informado.');
}