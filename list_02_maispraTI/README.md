# Exercícios de Lógica de Programação em JavaScript para o Curso da +Prati

Este repositório contém 09 exercícios práticos divididos por seções para praticar conceitos fundamentais de JavaScript, incluindo datas, loops, funções, recursão, arrays e objetos.

## Lista de Exercícios 02

1. **Validação de Datas**

Função: `ehDataValida(dia, mes, ano)`  
Verifica se os valores fornecidos representam uma data real.  
Considera meses com 28 a 31 dias e ano bissexto para o mês de fevereiro.

2. **Jogo de Adivinhação**

Cria um jogo no terminal onde:
- Um número aleatório entre 1 e 100 é gerado.
- O usuário tenta adivinhar o número usando `prompt`.
- A cada tentativa, o programa informa se o número é “mais alto” ou “mais baixo”.
- Contabiliza o número de tentativas até o acerto.

---

3. **Palavras Únicas**

Dada uma string como `"olá olá mundo mundo"`, utiliza `for` e `if/else` para extrair e exibir apenas as palavras únicas em um array.

---

4. **Fatorial Recursivo**

Função: `fatorial(n)`  
Calcula o fatorial de `n` usando recursão.  
- Lança um erro se `n < 0`.  
- Retorna 1 se `n === 0`.

---

**5. Debounce**

Função: `debounce(fn, delay)`  
Crie uma function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.  

---

6. **Memoization**

Função: `memoize(fn)`  
Implemente uma function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.

---

7. **Mapeamento e Ordenação**
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.

---

8. **Agrupamento por Propriedade**
Dado: vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.

---
9. **Conversão Entre Formatos**
Escreva duas funções:

○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.


## Tecnologias Utilizadas

- JavaScript
- Node.js


## 📦 Instalação das dependências

Este projeto utiliza o pacote `readline-sync` para capturar entradas do usuário no terminal. Para funcionar corretamente, você precisa instalar as dependências com o Node.js.

1. Inicialize o projeto (se ainda não existir o `package.json`):

```bash
npm init -y
```

2. Instale o pacote `readline-sync`:

```bash
npm install readline-sync
```

## Como Executar

Lembre-se de adentrar na pasta correta, neste caso
```bash
cd list_02_maispraTI/src
```

Você pode executar os códigos usando Node.js no terminal:

```bash
node exercicio_01.js

```

> Substitua `exercicio1.js` pelo nome do arquivo desejado.
