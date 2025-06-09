function fatorial(n) {
  if (n < 0) {
    throw new Error("Fatorial não é definido para números negativos.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

// testes
console.log(fatorial(7));
console.log(fatorial(5));
console.log(fatorial(3));
console.log(fatorial(1));

// testes com erro
try {
  console.log(fatorial(-1));
} catch (erro) {
  console.error(erro.message);
}
