const prompt = require('readline-sync').question;

const ladoA = Number(prompt('Informe o lado A do Triangulo: '));
const ladoB = Number(prompt('Informe o lado B do Triangulo: '));
const ladoC = Number(prompt('Informe o lado C do Triangulo: '));

// Verificando se os lados formam um triângulo
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    
  // Verificando o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
      console.log("Triângulo Equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      console.log("Triângulo Isósceles");
    } else {
      console.log("Triângulo Escaleno");
    }

}else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
