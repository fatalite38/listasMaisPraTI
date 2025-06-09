const prompt = require('readline-sync').question;

const idade = Number(prompt('Informe a sua idade: ')); // Recebendo a idade do usuário

// Verificando pela idade e informando se é criança, adolescente, adulto ou idoso
if (idade > 0 && idade <= 12) {
    console.log(`${idade} anos, é considerado uma criança.`);
} else if (idade > 12 && idade <= 18) {
    console.log(`${idade} anos, é considerado um adolescente.`);
} else if (idade > 18 && idade <= 60) {
    console.log(`${idade} anos, é considerado um adulto.`);
} else if (idade > 60) {
    console.log(`${idade} anos, é considerado um idoso.`);
} else {
    console.log('Informação inválida.');
}