class UI {
  constructor() {
    this.display = document.querySelector(".display__result");
    this.clickedValuesDisplay = document.querySelector(".display__clicked");

    this.value = "";
    this.lastOperator = "";
    this.clickedValue = "";
    this.tempResult = "";
    this.result = null;
    this.haveDot = false;
  }

  // Get value
  getValue(value) {
    if (value === "." && !this.haveDot) {
      this.haveDot = true;
    } else if (value === "." && this.haveDot) {
      return;
    }

    this.value += value;
    this.display.innerText = this.value;
  }

  // Get operator
  getOperator(operator) {
    if (operator === "=" || !this.value) return;

    this.haveDot = false;
    const operatorName = operator;

    if (this.value && this.clickedValue && this.lastOperator) {
      this.mathCalc();
      this.display.innerText = `${this.result}`;
    } else {
      this.result = parseFloat(this.value);
    }

    this.clickedValue += `${this.value} ${operator} `;

    this.clickedValuesDisplay.innerText = this.clickedValue;
    this.value = "";
    this.display.innerText = "";
    this.lastOperator = operatorName;
  }

  // Setting values
  setValue(operator = "") {}

  // Math calculation
  mathCalc() {
    if (this.lastOperator === "+") {
      this.result = parseFloat(this.result) + parseFloat(this.value);
    } else if (this.lastOperator === "-") {
      this.result = parseFloat(this.result) - parseFloat(this.value);
    } else if (this.lastOperator === "x") {
      this.result = parseFloat(this.result) * parseFloat(this.value);
    } else if (this.lastOperator === "/") {
      this.result = parseFloat(this.result) / parseFloat(this.value);
    }
  }

  // Equal to
  equalResult() {
    if (!this.value || !this.clickedValue) return;

    this.haveDot = false;
    this.mathCalc();
    this.display.innerText = this.result;
    this.clickedValuesDisplay.innerText = "";

    this.clickedValue = "";
    this.value = this.result;
  }

  // Delete last value
  deleteLast() {
    this.value = this.value.slice(0, this.value.length - 1);
    this.display.innerText = this.value;
  }

  // Clear all
  clearAll() {
    this.value = "";
    this.clickedValue = "";
    this.result = "";
    this.lastOperator = "";

    this.display.innerText = "";
    this.clickedValuesDisplay.innerText = "";
  }
}

export const calculation = () => {
  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  const deleteButton = document.querySelector("#delete");
  const resetButton = document.querySelector("#reset");
  const equalButton = document.querySelector("#equal");

  const ui = new UI();

  numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
      ui.getValue(e.target.innerText);
    });
  });

  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      ui.getOperator(e.target.innerText);
    });
  });

  deleteButton.addEventListener("click", () => {
    ui.deleteLast();
  });

  equalButton.addEventListener("click", () => {
    ui.equalResult();
  });

  resetButton.addEventListener("click", () => {
    ui.clearAll();
  });
};
