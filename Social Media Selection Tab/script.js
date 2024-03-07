const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".socialLists");
const liEls = document.querySelectorAll(".socialLists li");

menuEl.addEventListener("click", () => {
  menuEl.classList.toggle("rotate");
  socialListsEl.classList.toggle("hide");
});
liEls.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuTextEl.innerHTML = liEl.innerHTML;
    socialListsEl.classList.add("hide");
    menuEl.classList.toggle("rotate");
  });
});
