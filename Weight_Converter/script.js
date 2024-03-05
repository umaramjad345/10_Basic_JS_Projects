const inputEl = document.querySelector("#input");
const resultEl = document.querySelector("#result");
const errorEl = document.querySelector("#error");

let errorTime;
let resultTime;
function convertWeight() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please Enter a Valid Number";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = " ";
      inputEl.innerText = " ";
    }, 3000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = " ";
      errorEl.innerText = " ";
    }, 10000);
  }
}
inputEl.addEventListener("input", convertWeight);
