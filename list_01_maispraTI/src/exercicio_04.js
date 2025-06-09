const prompt = require('readline-sync').question;

// Recebendo a opção do usuário
const opcao = prompt(`Escolha uma alternativa:
------------------
1 - Jogar Video Game
2 - Sair com os amigos
3 - Dormir
------------------
`);

// Verificando qual opção o usuário escolheu
switch (opcao) {
    case '1':
        console.log(`${opcao} - O Usuário escolheu Jogar Video Game`);
        break;
    case '2':
        console.log(`${opcao} - O Usuário escolheu Sair com os amigos`);
        break;
    case '3':
        console.log(`${opcao} - O Usuário escolheu Dormir`);
        break;
    default:
        console.log('Opção inválida.');
}