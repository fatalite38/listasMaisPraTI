const prompt = require('readline-sync').question;

const frase = prompt('Informe uma frase: ');
const palavras = frase.split(" "); // separa as palavras
const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
    let contador = 0;

    // Verificando quantas vezes a palavra aparece na frase
    for (let j = 0; j < palavras.length; j++) {
        if (palavras[i] === palavras[j]) {
            contador++;
        }
    }

    // Se apareceu só uma vez e ainda não está no array de únicas
    if (contador === 1) {
        let palavraExistente = false;

        // Verifica se já foi adicionada
        for (let k = 0; k < palavrasUnicas.length; k++) {
            if (palavrasUnicas[k] === palavras[i]) {
                palavraExistente = true;
                break;
            }
        }

        if (!palavraExistente) {
            palavrasUnicas.push(palavras[i]);
        }
    }
}

console.log(palavrasUnicas);
