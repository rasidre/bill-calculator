const root = document.getElementById("root");

let calculatorContainer;

function createAndAddElement(addTo, defineHtmlElement, overrideVar, classesAsString) {
  overrideVar = document.createElement(defineHtmlElement);
  overrideVar.classList.add(classesAsString);
  addTo.appendChild(overrideVar);
}

createAndAddElement(root, "div", calculatorContainer, "calculator-container");
