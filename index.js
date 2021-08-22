const inputText = document.getElementById("text");
const btnEl = document.getElementById("btn");
const display = document.getElementById("display");

function errorHandler(error) {
  console.log("error", error);
  alert("something went wrong");
}

function show() {
  var text = inputText.value;
  fetch("https://api.funtranslations.com/translate/yoda.json?text=" + text)
    .then((response) => response.json())
    .then((json) => (display.innerHTML = json.contents.translated))
    .catch(errorHandler);
}

btnEl.addEventListener("click", show);
