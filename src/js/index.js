
let mobilemenu = document.querySelector("#mobile-menu");
let mobilebtn = document.querySelector("#mobile-btn");

mobilebtn.addEventListener("click", () => {
  mobilemenu.classList.toggle("opacity-0");
  mobilemenu.classList.toggle("opacity-100");

  mobilemenu.classList.toggle("invisible");
  mobilemenu.classList.toggle("visible");
  
  mobilemenu.classList.toggle("-translate-y-3");
  mobilemenu.classList.toggle("translate-y-0");
});
