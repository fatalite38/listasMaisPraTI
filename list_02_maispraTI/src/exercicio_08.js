const vendas = [
  { cliente: "Marcia", total: 1000 },
  { cliente: "Pedro", total: 240 },
  { cliente: "Ana", total: 520 },
  { cliente: "Marcia", total: 310 },
  { cliente: "Pedro", total: 175 },
  { cliente: "Ana", total: 80 },
  { cliente: "Jose", total: 100 },
  { cliente: "Marcia", total: 250 },
  { cliente: "Pedro", total: 400 },
  { cliente: "Ana", total: 500 },
];

// Calcular o total de vendas por cliente
const totaisPorCliente = vendas.reduce((acumulador, venda) => {
  const { cliente, total } = venda;

  if (acumulador[cliente]) {
    acumulador[cliente] += total;
  } else {
    acumulador[cliente] = total;
  }

  return acumulador; // Retornar o acumulador atualizado
}, {});

console.log("Total por cliente:", totaisPorCliente);
