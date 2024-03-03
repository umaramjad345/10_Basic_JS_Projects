const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popupContainer");
const closeIconEl = document.querySelector(".fa-xmark");

btnEl.addEventListener("click", () => {
  popupContainerEl.classList.remove("active");
  containerEl.classList.add("active");
});

closeIconEl.addEventListener("click", () => {
  popupContainerEl.classList.add("active");
  containerEl.classList.remove("active");
});
