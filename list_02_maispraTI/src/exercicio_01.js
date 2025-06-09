function ehDataValida(dia, mes, ano) {
    // Verificando se a data é válida
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }
  // Verificando se o ano é bissexto
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

  // Verificando se o dia é válido  
  if (ehBissexto && mes === 2) {
    return dia <= 29;
  }

  return dia <= diasPorMes[mes - 1];
}

// Testes
console.log(ehDataValida(29, 2, 2023));
console.log(ehDataValida(29, 2, 2016));
console.log(ehDataValida(31, 4, 2000));
console.log(ehDataValida(15, 10, 2025)); 
