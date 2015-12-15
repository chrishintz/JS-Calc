var calculate = function (firstNum, operator, secondNum) {
  if (operator        == "+") {
    answer = firstNum + secondNum;
  } else if (operator == "-") {
    answer = firstNum - secondNum;
  } else if (operator == "x") {
    answer = firstNum * secondNum;
  } else if (operator == "/") {
    answer = firstNum / secondNum;
  }
  return answer;
};

window.onload = function() {
  var calculator = document.getElementById("calculator");
  var answerDiv  = document.getElementById("answer");

  calculator.addEventListener("submit", function (event){
  event.preventDefault();
  var firstNum         = parseFloat(calculator.elements.firstNum.value);
  var secondNum        = parseFloat(calculator.elements.secondNum.value);
  var operator         = calculator.elements.operator.value;

  var answer    = calculate(firstNum, operator, secondNum);
  calculator.elements.firstNum.value  = answer;
  answerDiv.innerHTML                 = answer;
  });

  var clear = document.getElementById("clear");
  clear.addEventListener("click", function (event) {
    event.preventDefault();
    calculator.elements.firstNum.value    = null;
    calculator.elements.secondNum.value   = null;
    answerDiv.innerHTML                   = 0;
    calculator.elements.firstNum.focus();
  });
};
