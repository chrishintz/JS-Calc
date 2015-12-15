var calculate = function (firstNum, operator, secNum) {
  if (operator =="+") {
    answer = x + y;
  } else if (operator == "-") {
    answer = x - y;
  } else if (operator == "x") {
    answer = x * y;
  } else if (operator == "/") {
    answer = x / y;
  }
  return answer;
};

window.onload = function() {
  var calculator = document.getElementById("calculator");
  var answerDiv  = document.getElementById("answer");

  calculator.addEventListener("click", function (event){
  event.preventDefault();
  var x         = parseFloat(document.getElementById("firstNum").value);
  var y         = parseFloat(document.getElementById("secNum").value);
  var operator  = document.getElementById("operator").value;

  var answer    = calculate(x, operator, y);
  calculator.elements.x.value         = answer;
  answerDiv.innerHTML                 = answer;
  });

  select.addEventListener("change", function (){

  });
};
