var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))

var segundoValor = parseInt(prompt("Digite o segundo valor: "))

var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e o 4 para subtração ")
  
if ( operacao == 1) {
  var resultadoDiv = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultadoDiv + "</h2>");
} else if ( operacao == 2) {
  var resultadoMult = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultadoMult + "</h2>");
} else if ( operacao == 3) {
  var resultadoSoma = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultadoSoma + "</h2>");
} else if ( operacao == 4) {
  var resultadoSub = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultadoSub + "</h2>");
} else {
  document.write("<h2> Opção Inválida! </h2>")
}


/*
-Escrevendo na tela = document.write()
-Concatenação (juntar palavras com variáveis) - ("palavra" + variável)
- == --> comparação é diferente do = que usamos para fazer atribuição
*/

//if = se 
//else = senão
//else if = senão se 