window.addEventListener("load", function (e) {
  let openMenu = document.querySelector('#openMenu');
  let menu = document.querySelector('#menu');
  document.addEventListener("click", function (e) {
    if (openMenu === e.target) {
      e.preventDefault();
      menu.classList.toggle("active")
    } else if (e.target.closest(".active") || menu.classList.contains("active")) return;
    else menu.classList.add("active")
  }, true)
});