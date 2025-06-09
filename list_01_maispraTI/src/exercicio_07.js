const prompt = require('readline-sync').question;

const frutasCompradas = Number(prompt('Informe quantas frutas foram compradas: '));

// verificando o valor da compra
if (frutasCompradas > 0 && frutasCompradas < 12) {
    console.log(`O valor da compra foi de R$${frutasCompradas * 0.30}`);
    console.log("0.30 por unidade");
} else if (frutasCompradas > 12){
    console.log(`O valor da compra foi de R$${frutasCompradas * 0.25}`);
    console.log("0.25 por unidade");
} else {
    console.log("Informação inválida.");
}