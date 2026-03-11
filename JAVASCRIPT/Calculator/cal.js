let currentDisplay = document.querySelector(".display");

function press(value) {
  currentDisplay.value += value
}

function clearDisplay() {
  currentDisplay.value = '';
}

function backspace() {
  currentDisplay.value = currentDisplay.value.slice(0, -1);
}

function result() {
  currentDisplay.value = eval(currentDisplay.value);
}
