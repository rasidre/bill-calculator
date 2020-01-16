const root = document.getElementById("root");

let calculatorContainer = document.createElement("div");
let headline = document.createElement("h2");

let taxDescription = document.createElement("p");
let taxInput = document.createElement("input");

let billTotalDescription = document.createElement("p");
let billTotalInput = document.createElement("input");

let calculateButton = document.createElement("button");
let result = document.createElement("span");

function splitClasses(classes) {
  return classes.split(" ");
}

function addElement(addTo, htmlElement, classesAsString = "", elementText = false) {
  let classes = splitClasses(classesAsString);
  htmlElement.classList.add(...classes);
  elementText ? (htmlElement.innerText = elementText) : null;
  addTo.appendChild(htmlElement);
}

addElement(root, calculatorContainer, "calculator-container");
addElement(calculatorContainer, headline, "headline", "Bill Calculator");
addElement(
  calculatorContainer,
  taxDescription,
  "description tax-description",
  "Please enter your tax rate in %:"
);
addElement(calculatorContainer, taxInput, "input tax-input");
addElement(
  calculatorContainer,
  billTotalDescription,
  "description bill-total-description",
  "Please enter your bill in €:"
);
addElement(calculatorContainer, billTotalInput, "input bill-total-input");
addElement(calculatorContainer, calculateButton, "btn", "Calculate");
addElement(calculatorContainer, result, "result", "Result: ");

calculateButton.addEventListener("click", function() {
  let taxValue = taxInput.value / 100;
  let billValue = billTotalInput.value;
  let billTotal = billValue * (1 + taxValue);
  let resultAfterComma = billTotal.toString().split(".")[1];
  let resultBeforeComma = billTotal.toString().split(".")[0];
  let resultAfterModifying;
  resultAfterComma
    ? (resultAfterModifying = resultBeforeComma + "." + resultAfterComma.slice(0, 2))
    : (resultAfterModifying = billTotal);

  result.innerText = "Result: " + resultAfterModifying + " €";
});
