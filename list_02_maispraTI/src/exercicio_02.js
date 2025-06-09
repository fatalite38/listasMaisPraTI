const prompt = require('readline-sync').question;

// gerando um número aleatório
function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const min = 1;
    const max = 100;
    const numeroAleatorio = gerarNumeroAleatorio(min, max);

    // pedindo ao usuario para adivinhar o número
    let numeroAdivinhado = Number(prompt('Adivinhe o numero: '));

    // verificando se o número foi adivinhado.
    let tentativas = 0;
    while (numeroAdivinhado !== numeroAleatorio) {
        if (numeroAdivinhado > numeroAleatorio) {
            console.log('Mais baixo');
        } else {
            console.log('Mais alto');
        }
        numeroAdivinhado = Number(prompt('Adivinhe o numero: '));
        tentativas++;
    }
    console.log(`Parabens! Voce acertou em ${tentativas} tentativas.`);
