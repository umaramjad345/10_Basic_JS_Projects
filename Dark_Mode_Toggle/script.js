const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");

//   console.log(inputEl.checked);
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

const updateBody = () => {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
};

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
updateBody();
