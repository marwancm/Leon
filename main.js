const icon = document.querySelector(".icon");
const linksList = document.querySelector(".header .links ul");

icon.addEventListener("click", () => {
  linksList.classList.toggle("show");
});
