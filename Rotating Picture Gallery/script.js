const imageContainerEl = document.querySelector(".imageContainer");
const prevEl = document.getElementById("Prev");
const nextEl = document.getElementById("Next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});
function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}
updateGallery();
