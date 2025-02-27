const showResult = document.querySelector("h1");
const showFirstNumber = document.querySelector("h2");
const addNumber = document.querySelectorAll(".number-event");
const operator = document.querySelectorAll(".operator-event");
const calcul = document.querySelector("#calcul");
const reset = document.querySelector("#reset");

console.log(reset);

console.log(showFirstNumber);

// let value;
let createNumber = "";
let firstNumberToCalculate = "";
let secondNumberToCalculate = "";
let addOperator = null;

addNumber.forEach((btns) => {
  btns.addEventListener("click", () => {
    let valueButton = btns.textContent;

    if (showResult.textContent === "0") {
      showResult.textContent = "";
    }
    if (firstNumberToCalculate === "0") {
      firstNumberToCalculate = "";
    }
    if (showResult.textContent === addOperator) {
      if (!firstNumberToCalculate) {
        firstNumberToCalculate = createNumber;
        showFirstNumber.textContent = firstNumberToCalculate;
        createNumber = "";
      }
      showResult.textContent = "";
    }
    if (firstNumberToCalculate !== "" && addOperator === null) {
      firstNumberToCalculate += valueButton;
      showFirstNumber.textContent = firstNumberToCalculate;
      console.log("test");
    }
    if (firstNumberToCalculate === "" && addOperator !== null) {
      firstNumberToCalculate = "0";
    }

    showResult.textContent += valueButton;
    createNumber += valueButton;
    console.log(createNumber);
  });
});

operator.forEach((btns) => {
  btns.addEventListener("click", () => {
    let valueButton = btns.textContent;

    if (addOperator === null) {
      addOperator = valueButton;
      showResult.textContent = valueButton;
    }
  });
});

calcul.addEventListener("click", () => {
  if (firstNumberToCalculate) {
    secondNumberToCalculate = createNumber;
    switch (addOperator) {
      case "+":
        showResult.textContent =
          Number(firstNumberToCalculate) + Number(secondNumberToCalculate);
        break;
      case "-":
        showResult.textContent =
          Number(firstNumberToCalculate) - Number(secondNumberToCalculate);
        break;
      case "*":
        showResult.textContent =
          Number(firstNumberToCalculate) * Number(secondNumberToCalculate);
        break;
      case "/":
        showResult.textContent =
          Number(firstNumberToCalculate) / Number(secondNumberToCalculate);
        break;
    }
    firstNumberToCalculate = showResult.textContent;
    showFirstNumber.textContent = firstNumberToCalculate;
    addOperator = null;
    secondNumberToCalculate = "";
    createNumber = "";
  }
});

reset.addEventListener("click", () => {
  createNumber = "";
  firstNumberToCalculate = "";
  secondNumberToCalculate = "";
  addOperator = null;
  showResult.textContent = 0;
  showFirstNumber.textContent = 0;
});
