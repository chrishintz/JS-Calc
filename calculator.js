var calculate = function (firstNum, operator, secNum) {
  if (operator =="+") {
    answer = firstNum + secNum;
  } else if (operator == "-") {
    answer = firstNum - secNum;
  } else if (operator == "x") {
    answer = firstNum * secNum;
  } else if (operator == "/") {
    answer = firstNum / secNum;
  }
  return answer;
};

window.onload = function() {
  var calculator = document.getElementById("calculator");
  var answerDiv  = document.getElementById("answer");

  calculator.addEventListener("submit", function (event){
  event.preventDefault();
  var firstNum  = parseFloat(calculator.elements.firstNum.value);
  var secNum    = parseFloat(calculator.elements.secNum.value);
  var operator  = calculator.elements.operator.value;

  var answer    = calculate(firstNum, operator, secNum);
  calculator.elements.firstNum.value         = answer;
  answerDiv.innerHTML                 = answer;
  });

  select.addEventListener("change", function (){

  });

  var clear = document.getElementById("clear");
  clear.addEventListener("click", function (event) {
    event.preventDefault();
    calculator.elements.firstNum.value = null;
    calculator.elements.secNum.value   = null;
    answerDiv.innerHTML = 0;
    calculator.elements.firstNum.focus();
  });
};
