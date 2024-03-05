const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

formEl = document.getElementById("form");
scoreEl = document.getElementById("score");
questionEl = document.getElementById("question");
inputEl = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreEl.innerText = `score : ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;
const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  // const userAns = Number(inputEl.value);
  const userAns = parseInt(inputEl.value);
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
