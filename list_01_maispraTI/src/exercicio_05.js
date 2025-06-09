const prompt = require('readline-sync').question;

// informe o peso no formato (100.00) em quilogramas
const peso = Number(prompt(' Informe o seu peso:'));
// informe a altura no formato (1.00) em metros
const altura = Number(prompt(' Informe a sua altura:'));

// Calculando o IMC
const imc = peso / (altura * altura);
console.log(imc);

if (imc <= 18.5) {
    console.log(`Seu IMC (${imc.toFixed(2)}) indica baixo peso.`);
} else if ( imc > 18.5 && imc <= 24.9) {
    console.log(`Seu IMC (${imc.toFixed(2)}) indica peso normal.`);
} else if (imc > 25 && imc <= 29.9) {
    console.log(`Seu IMC (${imc.toFixed(2)}) indica sobrepeso.`);
} else if (imc > 30) {
    console.log(`Seu IMC (${imc.toFixed(2)}) indica obesidade.`);
} else {
    console.log('Informação inválida.');
}