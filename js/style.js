window.addEventListener("load", function (e) {
  let openMenu = document.getElementById('openMenu');
  menu = document.getElementById('menu');
  document.addEventListener("click", function (e) {
    if (openMenu === e.target) {
      e.preventDefault();
      menu.classList.toggle("active")
    } else if (e.target.closest(".active") || menu.classList.contains("active")) return;
    else menu.classList.add("active")
  }, true)
});