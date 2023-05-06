// seleciona o elemento de resultado
var result = document.getElementById("result");

// exibe os valores na caixa de resultado
function display(value) {
  result.value += value;
}

// limpa o resultado
function clearResult() {
  result.value = "";
}

// calcula o resultado
function calculate() {
  var expression = result.value;
  var answer = eval(expression);
  result.value = answer;
}
