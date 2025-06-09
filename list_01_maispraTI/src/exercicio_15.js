// Declarando as variáveis
let a = 0;
let b = 1;

// Imprimindo a sequência de Fibonacci
for (let i = 1; i <= 10; i++) {
    console.log(` fibonacci ${a}`);
    const c = a;
    a = b;
    b = c + b;
}