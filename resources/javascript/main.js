const menu = document.querySelector("#menu-icon");

menu.addEventListener("click", () => {
  document.querySelector("#navbar").classList.toggle("show");
  document.querySelector("#main-doc").classList.toggle("push-for-menu");
  document.querySelector(".menu-icon-line:nth-child(1)").classList.toggle("rotate-top");
  document.querySelector(".menu-icon-line:nth-child(2)").classList.toggle("fade-out");
  document.querySelector(".menu-icon-line:nth-child(3)").classList.toggle("rotate-bottom");
});
