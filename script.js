const showResult = document.querySelector("h1");
const showFirstNumber = document.querySelector("h2");
const numberButtons = document.querySelectorAll(".number-event");
const operatorButtons = document.querySelectorAll(".operator-event");
const calculButton = document.querySelector("#calcul");
const resetButton = document.querySelector("#reset");

let currentNumber = "";
let firstNumber = "";
let secondNumber = "";
let selectedOperator = null;
let errorState = false;

const hasFirstNumber = () => {
  return firstNumber !== "";
};
const operatorSelected = () => {
  return selectedOperator !== null;
};

const updateDisplay = (display, result) => {
  return (display.textContent = result);
};

const setValue = (value) => {
  return value === "0" ? "" : value;
};

numberButtons.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (errorState) return;
    const valueButton = btns.textContent;

    updateDisplay(showResult, setValue(showResult.textContent));
    firstNumber = setValue(firstNumber);
    currentNumber = setValue(currentNumber);

    if (showResult.textContent === selectedOperator) {
      if (!hasFirstNumber()) {
        currentNumber === ""
          ? (firstNumber = "0")
          : (firstNumber = currentNumber);

        updateDisplay(showFirstNumber, firstNumber);
        currentNumber = "";
      }

      updateDisplay(showResult, "");
    }

    if (hasFirstNumber() && !operatorSelected()) {
      firstNumber += valueButton;
      updateDisplay(showFirstNumber, firstNumber);
    }

    if (!hasFirstNumber() && operatorSelected()) {
      firstNumber = "0";
    }

    updateDisplay(showResult, showResult.textContent + valueButton);
    currentNumber += valueButton;
  });
});

operatorButtons.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (errorState) return;
    const valueButton = btns.textContent;

    if (!operatorSelected()) {
      selectedOperator = valueButton;
      updateDisplay(showResult, valueButton);
    }
  });
});

calculButton.addEventListener("click", () => {
  if (hasFirstNumber() && currentNumber !== "") {
    let result;
    secondNumber = currentNumber;
    switch (selectedOperator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "/":
        result =
          secondNumber === "0"
            ? "Error"
            : Number(firstNumber) / Number(secondNumber);
        break;
    }
    updateDisplay(showResult, result);
    result === "Error"
      ? (errorState = true)
      : clearState(showResult.textContent);
  }
});

resetButton.addEventListener("click", () => {
  clearState();
});

const clearState = (value = "0") => {
  currentNumber = "";
  secondNumber = "";
  selectedOperator = null;
  firstNumber = String(value);
  errorState = false;
  updateDisplay(showResult, value);
  updateDisplay(showFirstNumber, value);
};
