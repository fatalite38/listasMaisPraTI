const prompt = require('readline-sync').question;

const nota = Number(prompt('Informe a nota do aluno: ')); // Recebendo a nota do aluno

// Verificando se o aluno foi aprovado, reprovado ou está em recuperação
if (nota >= 0 && nota <= 4) {
    console.log(`${nota} - Aluno Reprovado.`);
} else if (nota >= 5 && nota < 7) {
    console.log(`${nota} - Aluno de Recuperação.`);
} else if (nota >= 7 && nota <= 10) {
    console.log(`${nota} - Aluno Aprovado.`);
} else {
    console.log('Informação inválida.');
}